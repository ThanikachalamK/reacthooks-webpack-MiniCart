const isProd = String(process.env.NODE_ENV).toLowerCase() === 'production'

function getServerConfiguration() {
  if (isProd) {
    return {
      baseURL: 'https://dnc0cmt2n557n.cloudfront.net/', // Prod Service Domain URL
    }
  }

  return {
    baseURL: 'https://dnc0cmt2n557n.cloudfront.net/', // Dev Service Domain URL
  }
}

const serverConfig = getServerConfiguration()

export default {
  serverConfig,
}
