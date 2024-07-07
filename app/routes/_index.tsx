import { json, ActionFunctionArgs, MetaFunction } from '@vercel/remix';
import { Link } from '@remix-run/react';
import { Card, CardHeader, CardContent } from '~/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar';
import { Separator } from '~/components/ui/separator';
import Emailer from '~/lib/emailer';
import { ContactForm } from '~/components/ui/contactForm';

export const meta: MetaFunction = () => {
  return [
    { title: 'We Want Web LLC' },
    {
      name: 'description',
      content:
        'We Want Web LLC is a software engineering consultancy and web services provider with over a decade of experience in e-commerce, marketing, and web applications',
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* TODO: add additional Pages */}
      {/* TODO: add logo */}
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="#" className="flex items-center justify-center">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Web Consulting</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Services
          </Link>
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Expertise
          </Link>
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Testimonials
          </Link>
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </header> */}
      <main className="flex-1">
        <section className="w-full px-2 py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-secondary">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                Elevate Your Digital Presence with{' '}
                <strong className="inline-block">We Want Web</strong>
              </h1>
              <p className="max-w-[600px] text-primary-foreground md:text-xl">
                Our team of experts specializes in crafting cutting-edge
                software solutions and designing visually stunning websites to
                help your business thrive in the digital landscape.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                to="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Tailored Solutions for Your Business
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From custom software development to stunning website design,
                  our team of experts is dedicated to delivering innovative
                  solutions that drive your business forward.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Software Development
                      </h3>
                      <p className="text-muted-foreground">
                        Leverage our expertise in cutting-edge technologies to
                        build custom software solutions that meet your unique
                        business needs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Web Design</h3>
                      <p className="text-muted-foreground">
                        Elevate your online presence with visually stunning and
                        user-friendly websites that captivate your audience.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Consulting</h3>
                      <p className="text-muted-foreground">
                        Benefit from our industry insights and strategic
                        guidance to make informed decisions and achieve your
                        business goals.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/services-hero.jpg"
                width="550"
                height="310"
                alt="Services"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="expertise" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Expertise You Can Count On
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of seasoned professionals has a proven track record of
                delivering exceptional results across a wide range of
                industries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-start gap-2">
                <CodeIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Software Engineering</h3>
                <p className="text-muted-foreground">
                  Cutting-edge technologies, agile methodologies, and attention
                  to detail.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <BrushIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  Visually stunning, user-friendly, and conversion-focused
                  designs.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <RocketIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Digital Strategy</h3>
                <p className="text-muted-foreground">
                  Innovative solutions to help you achieve your business goals.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <BriefcaseIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Consulting</h3>
                <p className="text-muted-foreground">
                  Tailored guidance to navigate the ever-evolving digital
                  landscape.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from the satisfied clients who have entrusted us with
                  their digital transformation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:gap-12">
              {/* <div className="flex flex-col justify-center space-y-4">
                <div className="rounded-lg bg-background p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="https:/placehold.co/25x25" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">John Doe</h3>
                      <p className="text-muted-foreground">CEO, Acme Inc.</p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-muted-foreground">
                    &ldquo;<strong>We Want Web</strong>, has been an invaluable
                    partner in our digital transformation. Their expertise and
                    attention to detail have been instrumental in the success of
                    our new website and custom software solutions.&rdquo;
                  </p>
                </div>
              </div> */}
              <div className="flex flex-col justify-center space-y-4 max-w-[600px] mx-auto">
                <div className="rounded-lg bg-background p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="#" />
                      <AvatarFallback>MG</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">Michelle G.</h3>
                      <p className="text-muted-foreground">
                        Owner, One Stitch at a Time
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-muted-foreground">
                    &ldquo;Working with <strong>We Want Web</strong> has been a
                    game-changer for our business. Their team&apos;s creativity
                    and problem-solving skills have helped us stand out in a
                    crowded market.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Transforming Businesses Through Innovative Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of our past projects and see how we&apos;ve
                  helped our clients achieve their digital goals.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="animate-in fade-in bg-background shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <img
                      src="/projects-cg4.png"
                      width="400"
                      height="225"
                      alt="Project 1"
                      className="rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Portfolio & Blog</h3>
                    <p className="text-muted-foreground">
                      A personal portfoliio and blog that was designed built and
                      deployed withing 72 hours! This project was setup entirely
                      using a headless CMS.
                    </p>
                  </CardContent>
                </Card>

                <Card className="animate-in fade-in bg-background shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <img
                      src="/projects-raincatcher.png"
                      width="400"
                      height="225"
                      alt="Project 2"
                      className="rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Landing Page</h3>
                    <p className="text-muted-foreground">
                      A fully responsive landing page that is conversion focused
                    </p>
                  </CardContent>
                </Card>
                <Card className="animate-in fade-in bg-background shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <img
                      src="/projects-dashboard.png"
                      width="400"
                      height="225"
                      alt="Project 3"
                      className="rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                    <p className="text-muted-foreground">
                      A custom dashboard using some of the industries leading
                      technologies in obsverability & monitoring
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to take your business to the next level? Contact us today
                to discuss your project.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              {/* <Contact /> */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const name = body.get('name');
  const message = body.get('message');
  const email = String(body.get('email'));
  const { VITE_EMAIL_USER, VITE_EMAIL_PASS } = import.meta.env;
  const emailer = new Emailer(VITE_EMAIL_USER, VITE_EMAIL_PASS);
  const thankYouMessage = `
<h1>Thank you, ${name}, for contacting us!</h1>
<p>We appreciate you reaching out to us regarding: <br/><em>${message}.</em>
<br /> We will be in touch soon.</p>`;
  try {
    await emailer.sendEmail(
      email,
      'We Want Web LLC Contact Form',
      thankYouMessage
    );
    return json({
      success: true,
      message: 'We will be in contact soon!',
    });
  } catch {
    return json({
      success: false,
      message:
        'there was an issue sending the contact email. Please try again.',
    });
  }
}

function BriefcaseIcon(props: Readonly<Record<string, unknown>>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function BrushIcon(props: Readonly<Record<string, unknown>>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

function CodeIcon(props: Readonly<Record<string, unknown>>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }

function RocketIcon(props: Readonly<Record<string, unknown>>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
