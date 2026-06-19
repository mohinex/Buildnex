/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Controller, Get, Post, Patch, Body, Param, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ContactLeadEntity, DemoRequestEntity } from "./lead.entity";

@Controller("api")
export class WebMarketingController {
  constructor(
    @InjectRepository(ContactLeadEntity)
    private readonly leadRepo: Repository<ContactLeadEntity>,

    @InjectRepository(DemoRequestEntity)
    private readonly demoRepo: Repository<DemoRequestEntity>,
  ) {}

  // 1. POST Contact Form API
  @Post("contact")
  async submitContact(@Body() body: any) {
    const { name, email, phone, company, message } = body;
    
    if (!name || !email || !message) {
      throw new HttpException("Name, email and message are required parameters.", HttpStatus.BAD_REQUEST);
    }

    const lead = this.leadRepo.create({ name, email, phone, company, message });
    return await this.leadRepo.save(lead);
  }

  // 2. GET Contact Leads (Admin list)
  @Get("admin/leads")
  async getLeads() {
    return await this.leadRepo.find({ order: { submittedAt: "DESC" } });
  }

  // 3. POST Demo Request API
  @Post("demo")
  async bookDemo(@Body() body: any) {
    const { name, email, phone, company, employeeCount, primaryNeed, message } = body;

    if (!name || !email || !company) {
      throw new HttpException("Missing crucial organization credentials.", HttpStatus.BAD_REQUEST);
    }

    const demo = this.demoRepo.create({
      name,
      email,
      phone,
      company,
      employeeCount,
      primaryNeed,
      message,
    });
    return await this.demoRepo.save(demo);
  }

  // 4. GET Demo Bookings
  @Get("admin/demos")
  async getDemos() {
    return await this.demoRepo.find({ order: { submittedAt: "DESC" } });
  }

  // 5. PATCH Demo Status (Admin)
  @Patch("admin/demos/:id/status")
  async updateStatus(@Param("id") id: string, @Body("status") status: string) {
    const demo = await this.demoRepo.findOneBy({ id });
    if (!demo) {
      throw new HttpException("Demo request not found.", HttpStatus.NOT_FOUND);
    }

    demo.status = status as any;
    return await this.demoRepo.save(demo);
  }
}
