function sha256_node(data: string): Promise<string> {
  const crypto = require('crypto')
  return Promise.resolve(crypto.createHash('sha256').update(data).digest('hex'))
}


