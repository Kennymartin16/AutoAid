import React from "react";

const Article: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Article */}
      <article className="mb-16">
        <p className="text-gray-500 text-sm mb-2">Posted on October 6th 2021</p>
        <h1 className="text-4xl font-bold mb-4">Should I Buy a New Car or Lease a New Car in 2021?</h1>
        <p className="text-gray-600 mb-6">
          We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This
          includes, We provide a full range of front end mechanical.
        </p>
        <img 
          src="/assets/road2.jpeg" 
          alt="Car on a winding road"
          className="w-full h-80 object-cover mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4">This is a blog post headline</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim ante et dui blandit aliquam. Mauris a 
          sapien et leo faucibus viverra quis sed felis. Ut finibus quam non erat condimentum, vel tincidunt sem varius. 
          Curabitur luctus velit id ligula lobortis, non facilisis dui varius. Donec et congue lectus. Nulla facilisi. 
          Praesent consectetur sapien accumsan lectus imperdiet placerat. Etiam ornare nisl sit et augue, eu placerat urna molestie.
        </p>
        <p className="text-gray-700 mb-4">
          Ut non urna a nibh condimentum dictum. Proin egestas erat a arcu ultricies, vitae elementum libero posuere. Duis ut 
          posuere tortor. Nulla tempus elit vitae urna suscipit, vel volutpat magna tincidunt. Aliquam nisi velit, dapibus quis sem vel, 
          venenatis mollis ante. Maecenas volutpat tristique quam. Suspendisse fringilla massa sed odio rhoncus. Nullam 
          et orci lorem. Donec non hendrerit augue. Sed at ex velit. Aenean placerat nec enim in fringis. Maecenas euismod nibh quis neque 
          pharetra, vel laoreet enim ultricies. Sed sed eros sed orci aliquet imperdiet. Fusce quis ligula aliquet augue sagittis molestie. 
          Duis ultricies purus velit, ut facilisis magna rhoncus sed. Sed vulputate ligula aliquet sem sagittis tincidunt. Etiam ullamcorper 
          mauris vel enim tempus, eu molestie tellus.
        </p>
      </article>

      {/* Small Blog Post */}
      <article className="border-t pt-8">
        <img 
          src="/assets/road1.jpeg" 
          alt="Long road with mountains"
          className="w-full h-64 object-cover mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">This is a small blog post headline</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim ante et dui blandit aliquam. Mauris a 
          sapien et leo faucibus viverra quis sed felis. Ut finibus quam non erat condimentum, vel tincidunt sem varius. 
          Curabitur luctus velit id ligula lobortis, non facilisis dui varius. Donec et congue lectus. Nulla facilisi. 
          Praesent consectetur sapien accumsan lectus imperdiet placerat. Etiam ornare nisl sit et augue, eu placerat urna molestie.
        </p>
        <p className="text-gray-700 mb-4">
          Ut non urna a nibh condimentum dictum. Proin egestas erat a arcu ultricies, vitae elementum libero posuere. Duis ut 
          posuere tortor. Nulla tempus elit vitae urna suscipit, vel volutpat magna tincidunt.
        </p>
        <p className="text-gray-700">
          Ut non urna a nibh condimentum dictum. Proin egestas erat a arcu ultricies, vitae elementum libero posuere. Duis ut 
          posuere tortor. Nulla tempus elit vitae urna suscipit, vel volutpat magna tincidunt. Aliquam nisi velit, dapibus quis sem vel, 
          venenatis mollis ante. Maecenas volutpat tristique quam. Suspendisse fringilla massa sed odio rhoncus. Nullam 
          et orci lorem. Donec non hendrerit augue. Sed at ex velit. Aenean placerat nec enim in fringis. Maecenas euismod nibh quis neque 
          pharetra, vel laoreet enim ultricies. Sed sed eros sed orci aliquet imperdiet. Fusce quis ligula aliquet augue sagittis molestie.
        </p>
      </article>
    </div>
  );
}

export default Article;