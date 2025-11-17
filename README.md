# Family Grimoire

An interactive website for cataloging family history and lineage, honoring the complexity of African American family structures including blood and chosen families.

## ✨ Features Built (Initial Setup)

### 🎨 Visual Design
- **Grimoire Interface**: Two-page spread with vintage book aesthetic
- **Wrinkled Paper Texture**: Handmade paper look with subtle gradients
- **Handwritten Fonts**: Caveat font for journal entries, Crimson Text for headers
- **Earthy Color Palette**: Greens, reds, oranges (earth), blues (sea/sky), warm golden tones

### 🌧️ Interactive Effects
- **Rain Droplets**: Animated raindrops falling on pages when memories mention rain
- **Page-Turn Animation**: Smooth 3D page-turning effect using Framer Motion
- **Photo Tucking**: Photos appear "tucked into" pages with corner curls and tape
- **Book Binding**: Visible binding with stitches in the center

### 📖 Current Demo
The grimoire displays a sample memory: "A Rainy Day with Grandma Ruby"
- Demonstrates handwritten journal entry style
- Shows rain effect overlay
- Displays photo tucking technique
- Includes essence description box

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Database**: PostgreSQL with Prisma ORM (schema designed, not yet connected)
- **Authentication**: NextAuth.js (basic setup)
- **AI**: OpenAI API integration (planned)

## 📊 Database Schema

Comprehensive schema designed for:
- Users with role-based permissions (Owner, Admin, Editor, Viewer)
- People profiles with dynamic styling
- Flexible relationships (blood family, chosen family, friends, mentors, etc.)
- Entry types: memories, recipes, journals, photos, videos, letters, spirituals, sayings
- Sensory metadata (smell, sound, taste, touch, visual, emotion)
- Communities (churches, neighborhoods, towns)
- AI prompts and answers
- Media files with EXIF extraction

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL (for database)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your database URL and API keys.

3. Run database migrations (when ready):
```bash
npx prisma migrate dev
```

4. Start development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
week-12-project/
├── app/                    # Next.js app directory
│   ├── api/               # API routes (NextAuth)
│   ├── globals.css        # Global styles & custom utilities
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── GrimoirePage.tsx  # Main grimoire book display
│   ├── RainEffect.tsx    # Rain animation component
│   └── PhotoTuck.tsx     # Photo with tucked corner effect
├── lib/                   # Utilities
│   └── auth.ts           # NextAuth configuration
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma models
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind theme configuration
```

## 🎨 Custom Styling

### Color Palette
- **Earth Tones**: Greens (#4A5D3F), Reds (#8B4537), Oranges (#C67B5C), Browns (#6B4423)
- **Water Tones**: Sky (#7BA8C4), Sea (#4A6B7C), Deep (#2E4F5E)
- **Memory Tones**: Golden (#D4A574), Amber (#C89858), Sepia (#9B7653)
- **Parchment**: Light (#F4EFE8), Medium (#E8DFD2), Dark (#D4C4B0)

### Typography
- **Handwriting**: Caveat (for journal entries)
- **Vintage**: Crimson Text (for headers and formal text)
- **Body**: Lora (for general content)

## 🔜 Next Steps

### Phase 1: Entry System
- [ ] Entry creation form with AI-powered questions
- [ ] Dynamic person profile building
- [ ] Recipe card with flip animation
- [ ] Letter templates for deceased loved ones

### Phase 2: Visualization
- [ ] Interactive timeline (D3.js)
- [ ] Vintage map with journey lines (Leaflet)
- [ ] Family tree visualization

### Phase 3: Advanced Features
- [ ] Audio/voiceover system
- [ ] Multi-user collaboration
- [ ] Search and filtering
- [ ] Data import/export

## 📝 License

Private project for family use.

## 🙏 Acknowledgments

Built to honor the complexity and beauty of African American family structures, chosen families, and community bonds forged through history.
