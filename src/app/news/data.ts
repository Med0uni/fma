export const demoArticles = [
  {
    id: 1,
    title: 'FM24 Winter Update Released',
    excerpt:
      'The latest database update includes all January transfers and various gameplay improvements.',
    content: `<div class="prose prose-lg dark:prose-invert">
        <p>Sports Interactive has released the much-anticipated winter update for Football Manager 2024, bringing thousands of changes and improvements to the game. This comprehensive update not only reflects the latest January transfer window moves but also introduces several gameplay enhancements and database corrections.</p>
  
        <h2>Key Features of the Winter Update</h2>
        
        <h3>Transfer Window Changes</h3>
        <ul>
          <li>Over 3,500 player transfers processed and verified</li>
          <li>Updated squad registration rules for all major competitions</li>
          <li>Revised player values and contract details</li>
          <li>New wonderkids and emerging talents added to the database</li>
        </ul>
  
        <h3>Gameplay Improvements</h3>
        <ul>
          <li>Enhanced match engine behavior for attacking movements</li>
          <li>Improved AI team selection and tactical adjustments</li>
          <li>More realistic transfer market behavior</li>
          <li>Updated competition rules and structures</li>
        </ul>
  
        <h2>Database Updates</h2>
        <p>The winter update brings significant changes to player attributes, team dynamics, and competition structures. Notable updates include:</p>
        
        <ul>
          <li>Revised player potential abilities based on recent performances</li>
          <li>Updated staff attributes and responsibilities</li>
          <li>New face packs and player images</li>
          <li>Corrected player positions and roles</li>
        </ul>
  
        <h2>Performance Optimization</h2>
        <p>Along with content updates, the patch includes several performance improvements:</p>
        
        <ul>
          <li>Faster game loading times</li>
          <li>Improved memory management</li>
          <li>Reduced CPU usage during matches</li>
          <li>Better save game compression</li>
        </ul>
  
        <h2>How to Install</h2>
        <p>The update will automatically download through Steam or Epic Games Store. For manual installations:</p>
        
        <ol>
          <li>Close Football Manager 2024 completely</li>
          <li>Restart your game platform (Steam/Epic)</li>
          <li>The update should automatically begin downloading</li>
          <li>Launch the game and verify the version number</li>
        </ol>
  
        <h2>Community Feedback</h2>
        <p>Initial community response has been overwhelmingly positive, with players particularly praising:</p>
        
        <ul>
          <li>More realistic transfer negotiations</li>
          <li>Improved match engine fluidity</li>
          <li>Better youth development progression</li>
          <li>Enhanced AI manager behavior</li>
        </ul>
  
        <div class="bg-primary/5 p-4 rounded-lg my-6">
          <h3 class="text-primary mb-2">Important Note</h3>
          <p class="text-sm">This update may affect existing save games. It's recommended to complete any ongoing seasons before applying the update, or start a new save to experience all new features.</p>
        </div>
      </div>`,
    date: '2024-02-15',
    category: 'Updates',
    author: 'Mohammed Ali',
    readTime: '8 min read',
    slug: 'fm24-winter-update',
    featuredImage: {
      formats: {
        medium: {
          url: '/assets/banners/fm24-hero-key-art.png',
        },
        large: {
          url: '/assets/banners/fm24-hero-key-art.png',
        },
      },
    },
    relatedArticles: [
      {
        id: 2,
        title: 'New Features in FM24 Tactics Update',
        slug: 'fm24-tactics-update',
        excerpt:
          'Explore the latest tactical innovations and improvements in Football Manager 2024.',
        date: '2024-02-14',
        category: 'Features',
      },
      {
        id: 3,
        title: 'FM24 Match Engine Improvements',
        slug: 'fm24-match-engine-improvements',
        excerpt:
          'Detailed analysis of the latest match engine improvements in FM24.',
        date: '2024-02-13',
        category: 'Features',
      },
    ],
    tags: ['FM24', 'Update', 'Database', 'Transfers', 'Patch Notes'],
    socialShares: {
      twitter: 1200,
      facebook: 850,
      linkedin: 320,
    },
  },
  {
    id: 2,
    title: 'New Features in FM24 Tactics Update',
    excerpt:
      'Explore the latest tactical innovations and improvements in Football Manager 2024.',
    date: '2024-02-14',
    category: 'Features',
    slug: 'fm24-tactics-update',
    featuredImage: {
      formats: {
        medium: {
          url: '/assets/banners/tactics.jpg_large',
        },
        large: {
          url: '/assets/banners/tactics.jpg_large',
        },
      },
    },
  },
]

export async function getArticleBySlug(slug: string) {
  const article = demoArticles.find((article) => article.slug === slug)
  if (!article) throw new Error('Article not found')
  return article
}

export async function getRelatedArticles(currentSlug: string) {
  return demoArticles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 3)
}
