import ContactCard from "@/components/ContactCard";
import DonateCard from "@/components/DonateCard";
import InfoCard from "@/components/InfoCard";
export default function Home() {
  return (
    <div>
      <main>
        <DonateCard />
        <InfoCard />
        <div className="contact_container">
          <ContactCard />
        </div>
      </main>
    </div>
  );
}
