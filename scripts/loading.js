import ora from 'ora';

const loading = ora('LP!给我加载！！！！').start();
setTimeout(() => loading.stop(), 300000);
