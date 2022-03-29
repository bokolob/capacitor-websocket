import { WebPlugin } from '@capacitor/core';
import { CapacitorWebsocketPlugin } from './definitions';

export class CapacitorWebsocketWeb extends WebPlugin implements CapacitorWebsocketPlugin {
  constructor() {
    super({
      name: 'CapacitorWebsocket',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const CapacitorWebsocket = new CapacitorWebsocketWeb();

export { CapacitorWebsocket };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorWebsocket);
