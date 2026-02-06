import ContactCard from "@/components/ContactCard";
export default function Home() {
  return (
    <div>
      <main>
        <div className="flex w-[1440px] h-[794px] bg-[#FAB12F] items-center justify-center gap-8">
          <div className="w-[621px] h-[554px] flex-shrink-0 rounded-[25px] bg-[#FEF3E2] p-8">
            <h3 className="text-2xl font-bold mb-4">QueerCoded</h3>
            <p className="text-base leading-relaxed">QueerCoded is a new student org for LGBTQ+ students and allies in computer science. 
               We aim to provide a safe and welcoming community for LGBTQ+ students in computer science and adjacent fields to talk about their experiences and interests in CS. 
               We have a room in the Siebel basement (room number 0209) open to all, come visit us and join us at upcoming social events!</p>
          </div>
          <div> 
            <img className="w-[827px] h-[646px] flex-shrink-0 aspect-[827/646]" src="/assets/butterfly.png" alt="Butterfly" />
          </div>
        </div>
        <div className="contact_container">
          <ContactCard />
        </div>
      </main>
    </div>
  );
}
