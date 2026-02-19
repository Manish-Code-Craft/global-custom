'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  BookOpen, 
  Clock, 
  ChevronRight, 
  ArrowLeft, 
  User, 
  Calendar, 
  Tag,
  Loader2,
  Share2,
  Bookmark,
  LayoutGrid,
  List,
  ExternalLink
} from 'lucide-react';

/**
 * CONFIGURATION
 * Primary Theme Color: #3daee0
 */
const WP_BASE_URL = 'https://blog.globalcust.co.uk/wp-json/wp/v2';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [postsRes, catRes] = await Promise.all([
        fetch(`${WP_BASE_URL}/posts?_embed&per_page=12`),
        fetch(`${WP_BASE_URL}/categories?per_page=20`)
      ]);

      const postsData = await postsRes.json();
      const catData = await catRes.json();

      if (Array.isArray(postsData)) {
        setPosts(postsData);
      } else {
        throw new Error("Invalid response from content source.");
      }
      
      setCategories(catData);
      setLoading(false);
    } catch (err) {
      setError("Connectivity issue with the content source. Please check your network or CORS settings.");
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.rendered.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory ? post.categories.includes(activeCategory) : true;
    return matchesSearch && matchesCategory;
  });

  const getFeaturedImage = (post) => {
    return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  };

  if (selectedPost) {
    return (
      <PostDetail 
        post={selectedPost} 
        onBack={() => setSelectedPost(null)} 
        formatDate={formatDate}
        getFeaturedImage={getFeaturedImage}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-[#3daee0]/20">
      {/* Modern Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <BookOpen className="text-[#3daee0] h-6 w-6" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase italic">K-HUB</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest text-gray-400">
              <a href="#" className="hover:text-black transition-colors">Resources</a>
              <a href="#" className="hover:text-black transition-colors">Solutions</a>
              <a href="#" className="hover:text-black transition-colors text-black border-b-2 border-[#3daee0]">Knowledge Base</a>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-[#3daee0] transition-all">Support</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-black text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3daee0]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Master Your <span className="text-[#3daee0]">Workflow.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Access curated technical insights, industry reports, and deep-dive documentation directly from our engineering team.
          </p>
          
          <div className="max-w-2xl mx-auto relative group">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 px-14 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3daee0] focus:bg-white/15 transition-all text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-[#3daee0]" />
          </div>
        </div>
      </section>

      {/* Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => setActiveCategory(null)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                activeCategory === null 
                ? 'bg-black text-white shadow-lg shadow-black/20' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              Recent All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat.id 
                  ? 'bg-[#3daee0] text-white shadow-lg shadow-[#3daee0]/20' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
                dangerouslySetInnerHTML={{ __html: cat.name }}
              />
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-gray-100 p-1 rounded-lg flex">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#3daee0]' : 'text-gray-400'}`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm text-[#3daee0]' : 'text-gray-400'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="h-12 w-12 text-[#3daee0] animate-spin mb-4" />
            <span className="uppercase tracking-widest text-xs font-black text-gray-400">Synchronizing Data</span>
          </div>
        ) : error ? (
          <div className="max-w-md mx-auto text-center py-20 bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <p className="text-black font-black uppercase tracking-widest mb-4">API Fetch Error</p>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">{error}</p>
            <button onClick={fetchData} className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-[#3daee0] transition-colors uppercase tracking-widest text-xs">Re-Connect</button>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? "grid gap-8 md:grid-cols-2 lg:grid-cols-3" 
            : "flex flex-col gap-6"
          }>
            {filteredPosts.map((post) => (
              <PostCard 
                key={post.id} 
                post={post} 
                mode={viewMode}
                onClick={() => setSelectedPost(post)}
                formatDate={formatDate}
                getFeaturedImage={getFeaturedImage}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-black text-white py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#3daee0] rounded flex items-center justify-center">
                <BookOpen className="text-black h-5 w-5" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase italic">K-HUB</span>
            </div>
            <p className="text-gray-400 max-w-sm text-sm">The central source of truth for technical documentation and strategic knowledge assets.</p>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-[#3daee0] mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-[#3daee0] mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Help Desk</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developers</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

const PostCard = ({ post, mode, onClick, formatDate, getFeaturedImage }) => {
  const isGrid = mode === 'grid';
  
  return (
    <article 
      onClick={onClick}
      className={`group cursor-pointer bg-white overflow-hidden transition-all duration-500 ${
        isGrid ? 'flex flex-col' : 'flex flex-col md:flex-row gap-8 p-6 rounded-3xl hover:bg-gray-50 border border-transparent hover:border-gray-100'
      }`}
    >
      <div className={`relative overflow-hidden rounded-2xl ${isGrid ? 'h-64 mb-6 shadow-lg shadow-black/5' : 'h-48 w-full md:w-80 flex-shrink-0'}`}>
        <img 
          src={getFeaturedImage(post)} 
          alt={post.title.rendered}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-black text-white px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest shadow-xl group-hover:bg-[#3daee0] transition-colors">
            {post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Resources'}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow">
        <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#3daee0] mb-4">
          <Calendar className="h-3 w-3" />
          <span>{formatDate(post.date)}</span>
          <span className="text-gray-300">•</span>
          <Clock className="h-3 w-3" />
          <span>8m READ</span>
        </div>
        
        <h3 
          className="text-2xl font-black text-black mb-4 leading-tight group-hover:text-[#3daee0] transition-colors"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        
        <div 
          className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-6 font-medium"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        
        <div className="mt-auto pt-4 flex items-center text-black font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-[#3daee0] transition-colors">
          <span>Explore Detailed View</span>
          <ChevronRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  );
};

const PostDetail = ({ post, onBack, formatDate, getFeaturedImage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#3daee0]/20">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-black hover:text-[#3daee0] transition-colors font-black text-xs uppercase tracking-[0.2em] group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to HUB
          </button>
          <div className="flex items-center space-x-4">
            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-black">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-black">
              <Bookmark className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <header className="bg-black text-white pt-24 pb-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3daee0]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-5 py-2 rounded bg-[#3daee0] text-black text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-lg shadow-[#3daee0]/20">
            {post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Intelligence Report'}
          </div>
          <h1 
            className="text-4xl md:text-6xl font-black leading-tight mb-12 tracking-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="flex flex-wrap justify-center items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center overflow-hidden">
                 <User className="h-6 w-6 text-[#3daee0]" />
              </div>
              <div className="text-left">
                <span className="text-white block">{post._embedded?.author?.[0]?.name || 'System Analyst'}</span>
                <span className="text-gray-600 block">Verified Author</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-4 w-4 text-[#3daee0]" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-4 w-4 text-[#3daee0]" />
              <span>8 MIN READ</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 -mt-32 pb-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Column */}
          <article className="lg:w-2/3 bg-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-gray-50">
            <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-black/10 aspect-video">
              <img src={getFeaturedImage(post)} className="w-full h-full object-cover" alt="Article Hero" />
            </div>

            <div className="prose prose-lg max-w-none">
              <style>{`
                .wp-article p { font-size: 1.125rem; line-height: 2.1; margin-bottom: 2.5rem; color: #374151; font-weight: 450; }
                .wp-article h2 { font-size: 2.5rem; font-weight: 900; color: #000; margin-top: 5rem; margin-bottom: 2rem; letter-spacing: -0.03em; border-left: 6px solid #3daee0; padding-left: 1.5rem; }
                .wp-article h3 { font-size: 1.85rem; font-weight: 800; color: #000; margin-top: 4rem; margin-bottom: 1.5rem; }
                .wp-article ul { list-style: none; padding-left: 0; margin: 3rem 0; }
                .wp-article li { position: relative; padding-left: 2.5rem; margin-bottom: 1.25rem; color: #374151; font-size: 1.1rem; }
                .wp-article li::before { content: ""; position: absolute; left: 0; top: 0.8rem; width: 1rem; height: 0.15rem; background: #3daee0; }
                .wp-article blockquote { font-style: normal; font-weight: 700; font-size: 1.75rem; border-left: 10px solid #3daee0; padding: 2rem 0 2rem 3rem; margin: 4rem 0; color: #000; background: #f8fafc; border-radius: 0 1rem 1rem 0; }
                .wp-article a { color: #3daee0; text-decoration: underline; text-underline-offset: 6px; font-weight: 800; transition: color 0.2s; }
                .wp-article a:hover { color: #000; }
                .wp-article img { border-radius: 2rem; margin: 4rem 0; shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1); }
              `}</style>
              <div 
                className="wp-article"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
              />
            </div>

            <div className="mt-20 pt-12 border-t border-gray-100 flex flex-wrap gap-3">
              <Tag className="h-4 w-4 text-gray-400 mr-2 mt-1" />
              {post._embedded?.['wp:term']?.[0]?.map(tag => (
                <span key={tag.id} className="text-[10px] font-black uppercase tracking-[0.2em] bg-gray-50 text-gray-400 border border-gray-100 px-4 py-2 rounded-lg hover:bg-[#3daee0] hover:text-white hover:border-[#3daee0] transition-all cursor-pointer" dangerouslySetInnerHTML={{ __html: tag.name }} />
              ))}
            </div>
          </article>

          {/* Sidebar Column */}
          <aside className="lg:w-1/3 space-y-10">
            <div className="bg-black text-white p-10 rounded-[2.5rem] shadow-xl shadow-black/20">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#3daee0] mb-8">Executive Review</h3>
              <div className="flex items-center space-x-5 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gray-900 border border-white/10 flex items-center justify-center">
                  <User className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="font-black text-sm uppercase tracking-wider">Tech Strategy Lead</p>
                  <p className="text-gray-500 text-[10px] tracking-[0.2em] uppercase">Vetted Insight</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed italic mb-8">"This asset provides fundamental architectural guidance for enterprise-grade deployments."</p>
              <button className="w-full bg-white text-black py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#3daee0] transition-all hover:scale-[1.02] active:scale-[0.98]">
                Request Support
              </button>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-10 rounded-[2.5rem]">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-black mb-8">Index</h3>
              <nav className="space-y-6 text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                <p className="text-[#3daee0] border-l-2 border-[#3daee0] pl-6">01 Summary</p>
                <p className="hover:text-black transition-colors pl-6 cursor-pointer">02 Infrastructure</p>
                <p className="hover:text-black transition-colors pl-6 cursor-pointer">03 Deployment</p>
                <p className="hover:text-black transition-colors pl-6 cursor-pointer">04 Analytics</p>
              </nav>
            </div>
            
            <div className="flex flex-col gap-4">
              <button className="w-full flex items-center justify-center space-x-4 py-6 rounded-[2rem] border-2 border-gray-100 text-black font-black uppercase tracking-[0.2em] text-[10px] hover:border-[#3daee0] hover:bg-[#3daee0]/5 transition-all">
                <Share2 className="h-4 w-4" />
                <span>Share Content</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-4 py-6 rounded-[2rem] bg-gray-50 text-gray-400 font-black uppercase tracking-[0.2em] text-[10px] hover:text-black transition-all">
                <ExternalLink className="h-4 w-4" />
                <span>Source Link</span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};