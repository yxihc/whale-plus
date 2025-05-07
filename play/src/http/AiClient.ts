export class AiClient {
  constructor() {}

  static create() {
    return new AiClient();
  }

  setHttpClient() {
    return this;
  }

  completions(data: any) {
    return this;
  }

  onDeepMessage(listener: any) {
    return this;
  }

  onMessage(listener: any) {
    return this;
  }

  onComplete(listener: any) {
    return this;
  }

  onError(listener: any) {
    return this;
  }

  setAiProvider() {
    return this;
  }
}

const AI = AiClient.create()
  .setAiProvider()
  .setHttpClient()
  .onDeepMessage((message) => {
    console.log(message);
  })
  .onMessage((message) => {
    console.log(message);
  })
  .onError((error) => {
    console.log(error);
  })
  .onComplete(() => {});

AI.completions({
  model: 'qwen-plus',
  stream: true,
  messages: [
    {
      role: 'system',
      content: 'You are a helpful assistant.',
    },
    {
      role: 'user',
      content: '你是谁？',
    },
  ],
});
