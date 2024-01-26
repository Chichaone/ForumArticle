import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./pipes/validation.pipe";
import * as cors from 'cors';

async function start():Promise<any> {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    // Configure CORS
    app.use(cors({
        origin: 'http://localhost:3000', // Replace with your actual frontend origin
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    }));

    const config = new DocumentBuilder()
        .setTitle('BACKEND')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();