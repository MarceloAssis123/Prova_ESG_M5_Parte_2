import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import * as request from 'supertest';
import { fila } from './class/fila.class';

describe('UserController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Fila', () => {
    it('enfileirar', async () => {
      expect(fila.enfileirar('Fila 2')).toBe('');
    });
  });


  afterAll(async () => {
    await app.close();
  });
});
