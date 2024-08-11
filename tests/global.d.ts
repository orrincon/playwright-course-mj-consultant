declare namespace NodeJS {
    interface ProcessEnv {
      URL: string;
      NODE_ENV: 'dev' | 'production' | 'test';
    }
  }