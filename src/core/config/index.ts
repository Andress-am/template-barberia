import businessData from '../../site/config/business.json';
import themeData from '../../site/config/theme.json';
import seoData from '../../site/config/seo.json';
import featuresData from '../../site/config/features.json';

import {
	businessSchema,
	themeSchema,
	seoSchema,
	featuresSchema,
} from './schemas';

export const business = businessSchema.parse(businessData);
export const theme = themeSchema.parse(themeData);
export const seo = seoSchema.parse(seoData);
export const features = featuresSchema.parse(featuresData);

import servicesData from '../../site/content/services.json';
import { servicesSchema } from './schemas';

export const services = servicesSchema.parse(servicesData);

import galleryData from '../../site/content/gallery.json';
import { gallerySchema } from './schemas';

export const gallery = gallerySchema.parse(galleryData);

import barbersData from '../../site/content/barbers.json';
import { barbersSchema } from './schemas';

export const barbers = barbersSchema.parse(barbersData);

import testimonialsData from '../../site/content/testimonials.json';
import faqData from '../../site/content/faq.json';
import promotionData from '../../site/content/promotion.json';
import { testimonialsSchema, faqSchema, promotionContentSchema } from './schemas';

export const testimonials = testimonialsSchema.parse(testimonialsData);
export const faq = faqSchema.parse(faqData);
export const promotionContent = promotionContentSchema.parse(promotionData);
