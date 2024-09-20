
import ImageCard from './ImageCard';
const PostViewer = ({type}) => {
    return (

        <div className='py-11'>
         
         
            <span className='font-bold text-4xl my-8 block dark:text-white text-slate-900'>{type} Post</span>



<div class="grid grid-cols-3 gap-14 justify-evenly m-auto">
    <ImageCard
        bannerImage="https://via.placeholder.com/400x200" // Replace with actual banner image URL
        category="Technology"
        title="The Impact of Technology on the Workplace: How Technology is Changing"
        authorName="Jane Doe"
        authorImage="https://randomuser.me/api/portraits/women/68.jpg" // Replace with actual author image URL
        date="September 19, 2024"
      />     <ImageCard
      bannerImage="https://via.placeholder.com/400x200" // Replace with actual banner image URL
      category="Technology"
      title="The Impact of Technology on the Workplace: How Technology is Changing"
      authorName="Jane Doe"
      authorImage="https://randomuser.me/api/portraits/women/68.jpg" // Replace with actual author image URL
      date="September 19, 2024"
    />     <ImageCard
    bannerImage="https://via.placeholder.com/400x200" // Replace with actual banner image URL
    category="Technology"
    title="The Impact of Technology on the Workplace: How Technology is Changing"
    authorName="Jane Doe"
    authorImage="https://randomuser.me/api/portraits/women/68.jpg" // Replace with actual author image URL
    date="September 19, 2024"
  />     <ImageCard
  bannerImage="https://via.placeholder.com/400x200" // Replace with actual banner image URL
  category="Technology"
  title="The Impact of Technology on the Workplace: How Technology is Changing"
  authorName="Jane Doe"
  authorImage="https://randomuser.me/api/portraits/women/68.jpg" // Replace with actual author image URL
  date="September 19, 2024"
/> 
      




      </div>
        </div>

    );
};

export default PostViewer;