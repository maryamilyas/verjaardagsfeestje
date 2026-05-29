const { kv } = require('@vercel/kv');

const KEY = 'bbq-state-v1';

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    const state = await kv.get(KEY);
    return res.status(200).json(state || {});
  }
  if (req.method === 'POST') {
    await kv.set(KEY, req.body);
    return res.status(200).json({ ok: true });
  }
  return res.status(405).end();
};
