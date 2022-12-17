import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['above-badger-6168-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'YWJvdmUtYmFkZ2VyLTYxNjgkEuMokT89YsH-ijh0GPYz8ApRgGAmi3G89r3nWbY',
          password:
            '6kAcEVqM-KGn0qP4vuhBv74F9KmaLNwJMJiGWkATxs6r67iiISeqhF31seAAq82au110wA==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
