import config from '../site.config';
import { siteConfigSchema } from './cfg-schema';

export const cfg = siteConfigSchema.parse(config);
