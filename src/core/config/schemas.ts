import { z } from 'zod';

export const businessSchema = z.object({
	name: z.string(),
	tagline: z.string(),
	city: z.string(),
	phone: z.string(),
	whatsapp: z.string(),
	address: z.string(),
	googleMapsUrl: z.string(),
	hours: z.object({
		weekdays: z.string(),
		weekend: z.string(),
	}),
	social: z.object({
		instagram: z.string(),
		facebook: z.string(),
		tiktok: z.string(),
	}),
});

export const themeSchema = z.object({
	colors: z.object({
		black: z.string(),
		white: z.string(),
		gold: z.string(),
		darkGray: z.string(),
		lightGray: z.string(),
	}),
	fonts: z.object({
		heading: z.string(),
		body: z.string(),
	}),
	borderRadius: z.string(),
});

export const seoSchema = z.object({
	title: z.string(),
	description: z.string(),
	ogImage: z.string(),
});

export const featuresSchema = z.object({
	sections: z.array(z.string()),
	promotion: z.object({
		active: z.boolean(),
	}),
});

export const serviceSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
	duration: z.string(),
	price: z.string(),
});

export const servicesSchema = z.array(serviceSchema);

export const galleryItemSchema = z.object({
	id: z.string(),
	category: z.enum(['cortes', 'fade', 'barbas', 'disenos']),
	alt: z.string(),
});

export const gallerySchema = z.array(galleryItemSchema);

export const barberSchema = z.object({
	id: z.string(),
	name: z.string(),
	specialty: z.string(),
	experience: z.string(),
	instagram: z.string(),
});

export const barbersSchema = z.array(barberSchema);

export const testimonialSchema = z.object({
	id: z.string(),
	name: z.string(),
	rating: z.number(),
	comment: z.string(),
});
export const testimonialsSchema = z.array(testimonialSchema);

export const faqItemSchema = z.object({
	id: z.string(),
	question: z.string(),
	answer: z.string(),
});
export const faqSchema = z.array(faqItemSchema);

export const promotionContentSchema = z.object({
	title: z.string(),
	description: z.string(),
	price: z.string(),
});
