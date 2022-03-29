declare module '@capacitor/core' {
  interface PluginRegistry {
    CapacitorWebsocket: CapacitorWebsocketPlugin;
  }
}

export interface CapacitorWebsocketPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
