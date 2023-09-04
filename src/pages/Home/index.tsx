import { Banner } from '@/components/Banner';
import { Feature } from '@/components/Feature';
import "./style.scss";

export const Home = (): JSX.Element => {
    return (
        <main>
            <Banner
                title={['No fees.', 'No minimum deposit.', 'High interest rates.']}
                subtitle={"Open a savings account with Argent Bank today!"}
            />
            
            <section id="features" className="features">
                <h2 className="sr-only">Features</h2>

                <Feature
                    title={"You are our #1 priority"}
                    subtitle={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}
                    icon={"chat"}
                />
                <Feature
                    title={"More savings means higher rates"}
                    subtitle={"The more you save with us, the higher your interest rate will be!"}
                    icon={"money"}
                />
                <Feature
                    title={"Security you can trust"}
                    subtitle={"We use top of the line encryption to make sure your data and money is always safe."}
                    icon={"security"}
                />
            </section>
        </main>
    );
}