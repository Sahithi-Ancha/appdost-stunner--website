import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the cutting-edge technologies and methodologies that will shape web development in the coming year.',
      category: 'Web Development',
      date: 'Jan 15, 2025',
      readTime: '8 min read',
      gradient: 'from-blue-500 to-cyan-500',
      image: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Building Secure Mobile Apps: Best Practices for 2025',
      excerpt: 'Learn essential security measures and best practices to protect your mobile applications from modern threats.',
      category: 'Mobile Development',
      date: 'Jan 12, 2025',
      readTime: '6 min read',
      gradient: 'from-green-500 to-emerald-500',
      image: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
    },
    {
      title: 'UI/UX Design Principles That Drive User Engagement',
      excerpt: 'Discover proven design strategies that create compelling user experiences and boost engagement metrics.',
      category: 'Design',
      date: 'Jan 10, 2025',
      readTime: '7 min read',
      gradient: 'from-purple-500 to-pink-500',
      image: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Cloud Infrastructure: Scaling Your Business for Growth',
      excerpt: 'A comprehensive guide to choosing and implementing cloud solutions that grow with your business needs.',
      category: 'Cloud Computing',
      date: 'Jan 8, 2025',
      readTime: '10 min read',
      gradient: 'from-orange-500 to-red-500',
      image: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
    },
    {
      title: 'CRM Systems: Transforming Customer Relationships',
      excerpt: 'How modern CRM solutions are revolutionizing the way businesses manage and nurture customer relationships.',
      category: 'Business Software',
      date: 'Jan 5, 2025',
      readTime: '5 min read',
      gradient: 'from-indigo-500 to-blue-500',
      image: 'bg-gradient-to-br from-indigo-500/20 to-blue-500/20',
    },
    {
      title: 'Cyber Security in 2025: Protecting Your Digital Assets',
      excerpt: 'Essential strategies and tools to safeguard your business from evolving cyber threats in the modern landscape.',
      category: 'Security',
      date: 'Jan 3, 2025',
      readTime: '9 min read',
      gradient: 'from-red-500 to-rose-500',
      image: 'bg-gradient-to-br from-red-500/20 to-rose-500/20',
    },
  ];

  const categories = [
    'All Posts',
    'Web Development',
    'Mobile Development',
    'Design',
    'Cloud Computing',
    'Security',
  ];

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Latest from Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and industry trends from our team of experts
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'bg-card/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:bg-card hover:text-foreground hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <Card
          className="mb-12 overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 group cursor-pointer animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${posts[0].image} relative overflow-hidden min-h-[300px]`}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute top-4 left-4">
                <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-primary">
                  Featured Post
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className={`px-3 py-1 bg-gradient-to-r ${posts[0].gradient} text-white rounded-full font-semibold`}>
                  {posts[0].category}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{posts[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
              <h3 className="text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                {posts[0].title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {posts[0].excerpt}
              </p>
              <Button variant="outline" className="w-fit group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                Read More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              {/* Image */}
              <div className={`${post.image} h-48 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${post.gradient} text-white rounded-full text-xs font-bold`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h4 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="pt-2">
                  <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More CTA */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8 py-6 font-bold group"
          >
            Load More Articles
            <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
