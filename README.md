# The Sol Store

A decentralized e-commerce platform built on Solana blockchain.

## Features

- Connect with Solana wallet
- Browse and purchase products
- Secure checkout process
- Real-time order tracking
- Email notifications
- Responsive design

## Development

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file with:
```
VITE_SHOP_ID=your_printify_shop_id
PRINTIFY_API_KEY=your_printify_api_key
```

3. Run development server:
```bash
npm run dev
```

## Deployment

The project is configured for GitHub Pages deployment. To deploy:

1. Fork this repository
2. Go to repository Settings > Secrets and variables > Actions
3. Add the following secrets:
   - `VITE_SHOP_ID`: Your Printify shop ID
   - `PRINTIFY_API_KEY`: Your Printify API key
4. Go to Settings > Pages
5. Set Source to "GitHub Actions"
6. Push to main branch or manually trigger the workflow

The site will be automatically deployed to `https://[username].github.io/The-Sol-Store/`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT
