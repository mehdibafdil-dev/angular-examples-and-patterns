import { Injectable } from '@angular/core';
import { RedisService } from './redis.service';

@Injectable()
export class CacheService {
    constructor(private redis: RedisService) { }

    async getCachedData(key: string): Promise<any> {
        const cached = await this.redis.get(key);
        if (cached) {
            return JSON.parse(cached);
        }
        return null;
    }
}