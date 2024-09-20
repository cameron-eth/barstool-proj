import React from 'react';

interface PaperProps {
  title: string;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
    author_url: string;
  };
}

const Paper: React.FC<PaperProps> = ({ title, imageUrl, author }) => {
  return (
    <div className="paper-card">
      <img className="paper-image" src={imageUrl} alt={title} />
      <div className="paper-content">
        <h1 className="paper-title">{title}</h1>
        <p className="paper-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras auctor, metus ac tempor venenatis, libero erat vehicula felis, eget facilisis purus magna sit amet est. Sed lacinia ligula non lectus efficitur vehicula. Fusce vitae lacus vehicula, ultricies nisi nec, interdum erat. Proin viverra, purus nec facilisis fringilla, ex mi bibendum ligula, eget cursus lorem magna vel dui. Nullam vitae arcu in justo luctus tincidunt. Aliquam erat volutpat. Integer volutpat tellus et odio aliquet, sed dignissim elit tristique. 
          <br /><br />
          Vivamus suscipit ex ut felis efficitur, eget condimentum orci interdum. Donec sed semper nisi, ac tempus ipsum. Nam eu nibh at nulla rhoncus mollis. In feugiat lectus non erat viverra, at gravida nulla gravida. Aliquam vitae risus ut nunc efficitur cursus. Integer luctus mauris sed suscipit eleifend. Curabitur vulputate nisi in magna ullamcorper, vitae ultricies velit vehicula. Donec sagittis risus a ultricies scelerisque. Sed ullamcorper odio at quam faucibus, a hendrerit risus ultricies. 
          <br /><br />
          Mauris efficitur enim at eros dapibus, at rhoncus purus scelerisque. Integer eget erat lacus. Etiam nec quam varius, tempor felis eget, dignissim odio. Suspendisse potenti. Fusce id accumsan leo, nec consectetur est. Pellentesque ac magna id neque feugiat efficitur id quis eros. Curabitur vel odio magna.
          <br /><br />
          Phasellus non nisi sit amet augue tempor vehicula. Duis sit amet tristique dui, a lacinia lectus. Nam at lacus magna. Praesent pulvinar purus vitae elit posuere, ac dapibus nisl maximus. Nunc a magna id leo euismod viverra ac ac libero. Curabitur nec suscipit mauris, vitae varius felis. Nunc consequat tortor ut ipsum tincidunt, ac vulputate sapien ultricies. Proin vitae tincidunt enim. Morbi sit amet ligula ac arcu tincidunt posuere sed vitae erat. Integer posuere nisi id orci feugiat, a pellentesque dolor vehicula.
          <br /><br />
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ut semper risus. Sed efficitur justo metus, a ullamcorper mi rhoncus sit amet. Nulla bibendum lorem et mi congue pharetra. Fusce volutpat eros nec nisi laoreet congue. Quisque laoreet sem nec eros consequat, a hendrerit nisl viverra. Nulla lacinia sapien orci, nec cursus libero pellentesque vel. Nam malesuada posuere nulla, sed cursus justo. Aliquam erat volutpat.
        </p>
        <div className="author-details">
          <img className="author-avatar" src={author.avatar} alt={author.name} />
          <p className="author-name">
            <a href={author.author_url} target="_blank" rel="noopener noreferrer">
              {author.name}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Paper;
