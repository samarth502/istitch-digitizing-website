import { Banner } from './components/banner';
import { ContactDetail } from './components/contact-detail';
import { ContactForm } from './components/contact-form';

export const ContactUs = () => {
  return (
    <div className="bg-lightGray">
      <Banner />
      <ContactDetail />
      <ContactForm />
    </div>
  );
};
