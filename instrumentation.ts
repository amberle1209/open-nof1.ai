export async function register() {  
  if (process.env.NEXT_RUNTIME === 'nodejs') {  
    // 延迟 5 秒等待 Next.js 完全启动  
    setTimeout(async () => {  
      await import('./cron');  
    }, 5000);  
  }  
}
