/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("contact_leads")
export class ContactLeadEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 150 })
  name: string;

  @Column({ type: "varchar", length: 150 })
  email: string;

  @Column({ type: "varchar", length: 50 })
  phone: string;

  @Column({ type: "varchar", length: 200 })
  company: string;

  @Column({ type: "text" })
  message: string;

  @CreateDateColumn({ name: "submitted_at" })
  submittedAt: Date;
}

@Entity("demo_requests")
export class DemoRequestEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 150 })
  name: string;

  @Column({ type: "varchar", length: 150 })
  email: string;

  @Column({ type: "varchar", length: 50 })
  phone: string;

  @Column({ type: "varchar", length: 200 })
  company: string;

  @Column({ type: "varchar", length: 50, default: "11-50" })
  employeeCount: string;

  @Column({ type: "varchar", length: 150 })
  primaryNeed: string;

  @Column({ type: "text" })
  message: string;

  @Column({ type: "varchar", length: 30, default: "pending" })
  status: "pending" | "contacted" | "scheduled" | "completed";

  @CreateDateColumn({ name: "submitted_at" })
  submittedAt: Date;
}

@Entity("blog_posts")
export class BlogPostEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 250, unique: true })
  title: string;

  @Column({ type: "varchar", length: 250, unique: true })
  slug: string;

  @Column({ type: "varchar", length: 500 })
  summary: string;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "varchar", length: 50 })
  category: "technology" | "enterprise" | "offline-sync" | "industry-insights";

  @Column({ type: "varchar", length: 100 })
  authorName: string;

  @Column({ type: "varchar", length: 100 })
  authorRole: string;

  @Column({ type: "varchar", length: 30 })
  readTime: string;

  @Column({ type: "varchar", length: 250 })
  coverImage: string;

  @CreateDateColumn({ name: "published_at" })
  publishedAt: Date;
}
