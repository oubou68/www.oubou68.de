import { describe, it, expect, beforeEach } from 'vitest';
import { HealthController } from './health.controller.js';

describe('HealthController', () => {
  let healthController: HealthController;

  beforeEach(() => {
    healthController = new HealthController();
  });

  it('should return health status ok with service details', () => {
    const result = healthController.getHealth();
    expect(result.status).toBe('ok');
    expect(result.service).toBe('www.oubou68.de API');
    expect(result.memory).toBeDefined();
    expect(result.uptimeSeconds).toBeGreaterThanOrEqual(0);
  });
});
