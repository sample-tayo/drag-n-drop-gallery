"use client";
import { useState, useEffect } from "react";
import Masonry from "./components/Masonry";
import Search from "./components/Search";
import Header from "./components/Header";
import SignInPage from "./signin/page";
import { useAuth } from "./context/AuthContext";
import gallery from "./data/data.json";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState(gallery);
  const { user, logOut } = useAuth();

  useEffect(() => {
    const filteredImages = gallery.filter((img) => {
      const nameMatch = img.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const descriptionMatch = img.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return nameMatch || descriptionMatch;
    });
    setFilteredImages(filteredImages);
  }, [searchQuery]);

  return (
    <main className=''>
      {user ? (
        <div>
          <Header user={user} logOut={logOut} />
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Masonry
            imageUrls={filteredImages}
            setImageUrls={setFilteredImages}
            columnCount='4'
          />
        </div>
      ) : (
        <div className='mx-8 md:mx-0 flex items-center justify-center h-screen'>
          <SignInPage />
        </div>
      )}
    </main>
  );
}
