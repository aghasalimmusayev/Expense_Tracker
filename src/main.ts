import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieSession from 'cookie-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Expense-Tracker')
    .setDescription('The Expence-Tracker API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Expense_Tracker')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.use(
    cookieSession({
      name: 'session',
      keys: ['secret_key_1'],
      maxAge: 24 * 60 * 60 * 1000, // 1 gün
    })
  );

  await app.listen(process.env.PORT ?? 3014);
}
bootstrap();
