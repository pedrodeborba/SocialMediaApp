import { ExpoConfig, ConfigContext } from '@expo/config';
import * as dotenv from 'dotenv';

dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => {
    return {
        ...config,
        slug: 'SocialMediaApp',
        name: 'SocialMediaApp',
        extra: {
        supabaseUrl: process.env.SUPABASE_URL,
        supabaseKey: process.env.SUPABASE_KEY,
        },
    };
};
