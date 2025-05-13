// "use client";

// import { useEffect, useState } from "react";

// type LoaderProps = {
//   onFinish: () => void;
// };

// export default function Loader({ onFinish }: LoaderProps) {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//       onFinish(); // Notify parent that loader is done
//     }, 5000); // match your video length

//     return () => clearTimeout(timer);
//   }, [onFinish]);

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
//       <video
//         src="/loader.mp4"
//         autoPlay
//         muted
//         playsInline
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// }
