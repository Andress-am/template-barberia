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
