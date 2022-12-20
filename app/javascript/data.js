// import about from "./assets/images/about.AVIF";

export const data = [
  {
    id: 1,
    title: "COMMUNICATION",
    text: "Communication ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, sit amet aliquam nisl nisl sit amet nisl.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    link_to: "#"
  },
  {
    id: 2,
    title: "LEADERSHIP",
    text: "Leadership ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, sit amet aliquam nisl nisl sit amet nisl.",
    image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",
    link_to: "#"
  },
  {
    id: 3,
    title: "DEVELOPPEMENT PERSONEL",
    text: "Developpement ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, sit amet aliquam nisl nisl sit amet nisl.",
    image: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    link_to: "#"
  },
  {
    id: 4,
    title: "EDUCATION",
    text: "Education ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, sit amet aliquam nisl nisl sit amet nisl.",
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    link_to: "#"
  },
  {
    id: 5,
    title: "SUJET DE SOCIETE",
    text: "La société ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, sit amet aliquam nisl nisl sit amet nisl.",
    image: "https://images.unsplash.com/photo-1516493249877-44b50333c6c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    link_to: "#"
  },
];

const showBlog = () => {
  let output = "";
  data.forEach((blog) => {
    output += `
      <div class="flex flex-col md:odd:flex-row md:even:flex-row-reverse h-auto mb-8 md:mb-12 lg:mb-16 2xl:mb-32 gap-4 md:gap-8 lg:gap-12 2xl:gap-16 rounded-b-md rounded-t-md shadow-md md:shadow-none">
        <div class="w-full md:w-1/2 relative">
          <div class="overlay md:flex justify-center">
            <div class="w-full h-full bg-title md:hover:bg-transparent md:hover:text-transparent bg-opacity-80 py-32 md:py-0 px-4 absolute top-0 left-0 flex justify-center items-center rounded-t-md md:rounded-md text-2xl md:text-3xl lg:text-5xl font-bold text-white transition duration-1000 ease-in-out select-none">
              <span class="text-center">${blog.title}</span>
            </div>
            <img src="${blog.image}" alt="${blog.title}" class="w-full h-72 rounded-md" />
          </div>
          <a href="${blog.link_to}" class="hidden md:block w-full absolute bottom-0 left-0 text-lg text-center text-white py-2 rounded-b-md bg-greenDark z-30">Voir Plus</a>
        </div>
        <div class="w-full md:w-1/2 md:py-0 relative">
          <p class="px-2 text-lg md:text-xl lg:text-2xl mb-12 md:mb-0">
            ${blog.text}
          </p>
          <a href="${blog.link_to}" class="w-full md:hidden absolute bottom-0 left-0 text-lg text-center text-white py-2 rounded-b-md bg-greenDark select-none">Voir Plus</a>
        </div>
      </div>
    `;
  });
  blog.innerHTML = output;
};

showBlog();
