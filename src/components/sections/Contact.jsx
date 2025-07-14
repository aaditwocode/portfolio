import React from 'react';

export const Contact= () => {
  const links = [
    { name: 'Twitter (X)', url: 'https://x.com/aaditwocode' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aaditya-pratap-singh-b39186284/' },
    { name: 'Leetcode', url: 'https://leetcode.com/u/aaditwocode/' },
    { name: 'Email', url: 'mailto:aadityapratapcr7@gmail.com' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/aaditwocode?csrf_token=220ea645bdcf721af249b22463d5ba4c' },
    { name: 'Codechef', url: 'https://www.codechef.com/users/aadi777siu' },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/aaditwbph2/' },
    { name: 'CodeStudio', url: 'https://www.naukri.com/code360/profile/0d510e23-d9cd-4094-9065-337f53d779d0' },
    { name: 'GitHub', url: 'https://github.com/aaditwocode' },
  ];

  return (
    <div id="contact"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '16px',
        padding: '20px',
        maxWidth: '700px',
        margin: '0 auto',
        fontSize: '16px',
      }}
    >
      {links.map(({ name, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '12px 16px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            textDecoration: 'none',
            color: '#0077cc',
            textAlign: 'center',
            transition: 'background-color 0.3s, color 0.3s',
            userSelect: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#0077cc';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#0077cc';
          }}
        >
          {name}
        </a>
      ))}
    </div>
  );
};


