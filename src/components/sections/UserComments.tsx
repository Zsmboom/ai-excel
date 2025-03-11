import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Send, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface Comment {
  id: string;
  name: string;
  email: string;
  content: string;
  date: string;
  avatar?: string;
}

const UserComments: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  // Define comments for different tool pages
  const getToolSpecificComments = (): Comment[] => {
    const path = location.pathname;
    
    // Excel Generator page comments
    if (path.includes('ai-excel-generator')) {
      return [
        {
          id: '1',
          name: 'Michael Johnson',
          email: 'michael@example.com',
          content: 'The AI Excel Generator is absolutely fantastic! I\'ve tried many tools, but this AI Excel Generator stands out. I created a complex budget spreadsheet with formulas in minutes that would have taken hours manually. The AI Excel Generator\'s ability to understand context and create accurate formulas is impressive.',
          date: '2025-03-18',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80'
        },
        {
          id: '2',
          name: 'Sarah Williams',
          email: 'sarah@example.com',
          content: 'As a financial analyst, the AI Excel Generator has revolutionized my workflow. The AI Excel Generator\'s intuitive interface and powerful features make spreadsheet creation effortless. What impresses me most is how the AI Excel Generator understands complex requirements and generates perfect Excel files with all formulas working correctly. This AI Excel Generator is truly a game-changer!',
          date: '2025-02-25',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
        },
        {
          id: '3',
          name: 'David Chen',
          email: 'david@example.com',
          content: 'The AI Excel Generator saved me countless hours! I use this AI Excel Generator daily for inventory tracking, and it creates perfect spreadsheets with all the calculations I need. The AI Excel Generator even suggests optimal formulas and formatting. I highly recommend this AI Excel Generator to anyone working with Excel - it\'s simply the best tool available.',
          date: '2025-02-08',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80'
        }
      ];
    }
    
    // Excel Functions page comments
    else if (path.includes('excel-functions')) {
      return [
        {
          id: '1',
          name: 'Emily Rodriguez',
          email: 'emily@example.com',
          content: 'The Excel Functions generator is a game-changer! I needed a complex VLOOKUP with multiple conditions and it created the perfect formula with clear explanations.',
          date: '2025-03-12',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80'
        },
        {
          id: '2',
          name: 'Robert Taylor',
          email: 'robert@example.com',
          content: 'As someone who struggles with VBA, this tool is incredible. It generated a macro that automated my weekly reporting process that used to take hours.',
          date: '2025-02-28',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80'
        },
        {
          id: '3',
          name: 'Jennifer Lee',
          email: 'jennifer@example.com',
          content: 'The step-by-step explanations that come with each function are so helpful. I\'m learning Excel as I use this tool. Highly recommended!',
          date: '2025-02-15',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
        }
      ];
    }
    
    // Pic to Excel page comments
    else if (path.includes('pic-to-excel')) {
      return [
        {
          id: '1',
          name: 'Thomas Wilson',
          email: 'thomas@example.com',
          content: 'The image-to-Excel conversion is incredibly accurate! I scanned a complex table from a printed report and it extracted all the data perfectly.',
          date: '2025-03-20',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80'
        },
        {
          id: '2',
          name: 'Lisa Martinez',
          email: 'lisa@example.com',
          content: 'This tool saved me hours of manual data entry. I had dozens of tables in PDF documents that needed to be analyzed in Excel. The conversion was fast and accurate!',
          date: '2025-03-05',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80'
        },
        {
          id: '3',
          name: 'Kevin Brown',
          email: 'kevin@example.com',
          content: 'I\'m impressed with how well it handles different image formats and table layouts. Even with poor quality scans, it managed to extract most of the data correctly.',
          date: '2025-02-18',
          avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=100&h=100&q=80'
        }
      ];
    }
    
    // Excel Chart page comments
    else if (path.includes('ai-excel-chart')) {
      return [
        {
          id: '1',
          name: 'Amanda Parker',
          email: 'amanda@example.com',
          content: 'The Excel Chart Generator created beautiful visualizations from my sales data. The insights it provided helped me identify trends I hadn\'t noticed before.',
          date: '2025-03-15',
          avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&h=100&q=80'
        },
        {
          id: '2',
          name: 'Daniel Kim',
          email: 'daniel@example.com',
          content: 'I love how this tool automatically recommends the best chart type for my data. The interactive customization options are also fantastic!',
          date: '2025-02-27',
          avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&h=100&q=80'
        },
        {
          id: '3',
          name: 'Rachel Green',
          email: 'rachel@example.com',
          content: 'My presentations look so much more professional now with these charts. The export quality is excellent and the data insights have been very valuable for our team.',
          date: '2025-02-10',
          avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=100&h=100&q=80'
        }
      ];
    }
    
    // Default/Home page comments
    return [
      {
        id: '1',
        name: 'James Wilson',
        email: 'james@example.com',
        content: 'ExcelEasy has completely transformed how I work with spreadsheets. The AI-powered tools are so intuitive and save me hours of work every week! ExcelEasy has become my essential tool.',
        date: '2025-03-22',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80'
      },
      {
        id: '2',
        name: 'Emma Thompson',
        email: 'emma@example.com',
        content: 'I\'ve tried many Excel tools, but ExcelEasy is by far the best. The formula generator and chart tools are exceptional. ExcelEasy has improved my productivity by 50%, highly recommend ExcelEasy!',
        date: '2025-03-10',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
      },
      {
        id: '3',
        name: 'Alex Johnson',
        email: 'alex@example.com',
        content: 'As someone who uses Excel daily, ExcelEasy\'s tools have become an indispensable part of my workflow. The image to Excel feature is particularly impressive! ExcelEasy is my Excel assistant.',
        date: '2025-02-15',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80'
      }
    ];
  };
  
  const [comments, setComments] = useState<Comment[]>(getToolSpecificComments());

  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟提交评论
    setTimeout(() => {
      const newCommentObj: Comment = {
        id: Date.now().toString(),
        ...newComment,
        date: new Date().toISOString().split('T')[0]
      };
      
      setComments(prev => [newCommentObj, ...prev]);
      setNewComment({
        name: '',
        email: '',
        content: ''
      });
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // 3秒后重置成功状态
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  // 当路径变化时更新评论
  useEffect(() => {
    setComments(getToolSpecificComments());
  }, [location.pathname]);

  return (
    <section id="user-comments" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('userComments.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('userComments.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* 评论表单 */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-md mb-10">
            <h3 className="text-2xl font-semibold mb-6">{t('userComments.leaveComment')}</h3>
            
            {submitSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                {t('userComments.submitSuccess')}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">{t('userComments.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newComment.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">{t('userComments.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newComment.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="content" className="block text-gray-700 mb-2">{t('userComments.form.comment')}</label>
                <textarea
                  id="content"
                  name="content"
                  value={newComment.content}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors disabled:bg-blue-400"
              >
                {isSubmitting ? (
                  <span>{t('userComments.form.submitting')}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    <span>{t('userComments.form.submit')}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* 评论列表 */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">{t('userComments.recentComments')}</h3>
            
            {comments.length === 0 ? (
              <p className="text-gray-500 italic">{t('userComments.noComments')}</p>
            ) : (
              comments.map(comment => (
                <div key={comment.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {comment.avatar ? (
                        <img
                          src={comment.avatar}
                          alt={comment.name}
                          className="w-12 h-12 rounded-full"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="w-6 h-6 text-gray-500" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserComments; 