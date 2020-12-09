import ReactCountryFlag from "react-country-flag";
import styled from 'styled-components';
import { Space } from 'antd';
import Link from 'next/link';

export const Container = styled(Space)`
    margin: 0 1rem 0.5rem 1rem;
    display: flex;
    justify-content: flex-end;
`;

const langs = [
    { locale: 'pt', countryCode: 'BR' },
    { locale: 'en', countryCode: 'US' },
];

function LanguageLinks() {
  return (
    <Container>
        {langs.map(({ locale, countryCode }) => (
            <Link key={locale} href='/' locale={locale}>
                <ReactCountryFlag countryCode={countryCode} style={{ fontSize: '1.25rem', cursor: 'pointer' }}/>
            </Link>
        ))}
    </Container>
  );
}

export default LanguageLinks;