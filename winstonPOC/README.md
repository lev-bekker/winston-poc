
---

# NestJS Repository with Winston Logger

This repository provides a boilerplate setup for a NestJS application integrated with the Winston logger.

## Getting Started

To get started with this repository, follow these steps:

### Prerequisites

Make sure you have the following prerequisites installed on your system:

- Node.js and npm (Node Package Manager) v22.2.0
- Git

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/winston-poc.git
   ```

2. Navigate to the project directory:

   ```bash
   cd winstonPOC
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

To run the NestJS application with the Winston logger, use the following command:

```bash
npm run start:dev
```

This will start the application and log messages using the Winston logger.

### Configuration

The Winston logger configuration can be found in the `logger/logger.service.ts` file. You can customize the logger configuration according to your requirements, such as log levels, formats, and transports.

### Logging Example

You can use the Winston logger to log messages from anywhere in your NestJS application. Here's an example of how to use the logger in a controller:

```typescript
import { Controller, Get } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';

@Controller()
export class AppController {
  constructor(private readonly logger: LoggerService) {}

  @Get()
  getHello(): string {
    this.logger.log('Hello World!');
    return 'Hello World!';
  }
}
```

### Contributing

Contributions are welcome! If you have any suggestions, improvements, or feature requests, feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

# winston-poc
