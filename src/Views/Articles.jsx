import React from 'react';
import "../CSS/articles.css";
import { ExternalLink } from 'lucide-react';

const articles = [
    {
      title: "Navigating the Maze of React Hooks: Understanding, Implementing, and Avoiding Pitfalls",
      description: "A comprehensive exploration of React's useState and useEffect hooks, offering insights into their proper implementation and common mistakes to avoid.",
      imageUrl: "/images/RH.png",
      mediumLink: "https://medium.com/@ladenas202/navigating-the-maze-of-react-hooks-understanding-implementing-and-avoiding-pitfalls-82ba52d7b98d"
    },
    {
      title: "Navigating the Maze of React Hooks: Understanding, Implementing, and Avoiding Pitfalls pt.2",
      description: "Part 2 of our deep dive into React hooks, focusing on advanced hook patterns, best practices, and performance optimizations.",
      imageUrl: "/images/RH.png",
      mediumLink: "https://medium.com/@ladenas202/navigating-the-maze-of-react-hooks-understanding-implementing-and-avoiding-pitfalls-pt-2-023b716c7724"
    },
    {
      title: "The Developer Mindset",
      description: "A guide to cultivating a growth-oriented mindset for developers, including tips on learning, problem-solving, and staying motivated in the tech industry.",
      imageUrl: "/images/Git.png",
      mediumLink: "https://medium.com/@ladenas202/the-developer-mindset-fb9f60fb4d86"
    },
    {
      title: "Mastering Basic Git Operations and Leveraging GitHub for Seamless Code Collaboration",
      description: "A practical guide to mastering essential Git commands and utilizing GitHub to streamline collaboration in software projects.",
      imageUrl: "/images/Mindset.png",
      mediumLink: "https://medium.com/@ladenas202/mastering-basic-git-operations-and-leveraging-github-for-seamless-code-collaboration-9d6b2225aa88"
    },
    // Add more articles as needed
  ];
  

const Articles = () => {
  return (
    <div className='project_page' style={{height:"100%", paddingBottom:30}} >
      <div className="Myprojects">
        <p style={{ textAlign: "center", marginBottom: 60, fontSize: 25 }} className="projectTitle">My Articles</p>
        <div className="article-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <img
                src={article.imageUrl}
                alt={article.title}
                width={400}
                height={200}
                className="article-image"
              />
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <a
                  href={article.mediumLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-link"
                >
                  Read on Medium
                  <ExternalLink className="link-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
