/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ShowcaseApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string; // Used to map to Lucide icons dynamically
  features: string[];
  mockupType: 'calendar' | 'dashboard' | 'menu' | 'barber' | 'travel';
  stats: {
    label: string;
    value: string;
  };
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  quote: string;
  avatar: string;
  impactResult: string;
}
