import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/app/components/ScrollReveal';
import ProductSpecCard from './ProductSpecCard';
import JsonLd from '@/components/JsonLd';
import { productSchema } from '@/lib/structured-data';

const specs = [
{ label: 'Technology', value: 'Non-electronic Early Streamer Emission (ESE)' },
{ label: 'Advance Time (ΔT)', value: '60 μs' },
{ label: 'Material', value: '304L Stainless Steel' },
{ label: 'Protection Radius', value: 'Up to 107 m (5 m mast, Level IV)' },
{ label: 'Lightning Impulse Current', value: '200 kA tested (10/350 μs)' },
{ label: 'Standards', value: 'NF C 17-102 · UNE 21186 · TS EN 62561' }];

const umbraEcoFeatures = [
  { label: 'Type', value: 'Non-Electronic ESE' },
  { label: 'Standard', value: 'NF C 17-102 (2011)' },
  { label: 'Certification', value: 'CE Certified' },
  { label: 'Delta T (ΔT)', value: '10 µSec (Triggering Time Advance)' },
  { label: 'Protection Radius', value: 'Up to 51 meters (Level IV)' },
  { label: 'Power Source', value: 'No battery or external power source required' },
];

const spdSpecs = [
  { label: 'Model', value: 'TB7K320T12L' },
  { label: 'Protection Type', value: 'Type 1 + 2 (Class B + C)' },
  { label: 'Phase', value: 'Three Phase' },
  { label: 'Rated Voltage (Uc)', value: '320 VAC' },
  { label: 'Voltage Protection Level (Up)', value: '1.6 kV' },
  { label: 'Impulse Current (Iimp)', value: '7 kA' },
  { label: 'Nominal Discharge Current (In)', value: '30 kA' },
  { label: 'IP Rating', value: 'IP20' },
  { label: 'Poles Number', value: '3 Pole + N' },
];

export default function TopbasSection() {
  return (
    <section className="py-20 bg-card border-t border-border" aria-label="TOPBAS products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-14">
          <div className="flex items-start gap-4">
            <div>
              <span className="section-label">Authorised Supplier</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2">
                TOPBAS Lightning Protection Products
              </h2>
              <p className="text-base text-muted-foreground mt-3 max-w-2xl leading-relaxed">
                Henel Engineers is an authorised supplier of TOPBAS lightning protection products, imported from Turkey. TOPBAS manufactures a range of ESE lightning arresters and lightning protection accessories for global markets.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ESE Lightning Arresters Subheading */}
        <ScrollReveal className="mb-10">
          <h3 className="text-xl font-800 text-foreground border-b border-border pb-3">
            ESE Lightning Arresters
          </h3>
        </ScrollReveal>

        {/* TOPBAS SIRIUS Product */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start mb-16">
          {/* Product image + badge */}
          <ScrollReveal delay={1} className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-xl aspect-square bg-muted flex items-center justify-center">
              <AppImage
                src="/assets/images/sirius-ese-lightning-arrester.webp"
                alt="TOPBAS SIRIUS ESE lightning arrester, stainless steel early streamer emission air terminal"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-4" />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <span
                  className="inline-block px-3 py-1 rounded-sm text-xs font-800 uppercase tracking-widest mb-2"
                  style={{ backgroundColor: '#CC0000', color: '#FFFFFF' }}>
                  TOPBAS SIRIUS
                </span>
                <p className="text-white font-700 text-base">ESE Lightning Arrester</p>
                <p className="text-white/70 text-xs mt-1">Imported from Turkey</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Specs table */}
          <ScrollReveal delay={2} className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-muted/40">
                <h3 className="text-base font-800 text-foreground">Technical Specifications</h3>
                <p className="text-xs text-muted-foreground mt-0.5">TOPBAS SIRIUS ESE Lightning Arrester</p>
              </div>
              <div className="px-6 py-2">
                {specs?.map((spec) =>
                <div key={spec?.label} className="spec-row">
                    <span className="text-xs font-700 uppercase tracking-wider text-muted-foreground w-2/5 flex-shrink-0">
                      {spec?.label}
                    </span>
                    <span className="text-sm font-600 text-foreground text-right">
                      {spec?.value}
                    </span>
                  </div>
                )}
              </div>
              <div className="px-6 py-4 border-t border-border bg-muted/20">
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  Specifications are sourced from TOPBAS product documentation. Consult the official TOPBAS datasheet and a qualified engineer for project-specific design decisions. Henel Engineers does not independently certify these specifications.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Quote
                <Icon name="ArrowRightIcon" size={16} variant="outline" />
              </Link>
              <a href="tel:+919443282312" className="contact-info-link">
                <Icon name="PhoneIcon" size={16} variant="solid" style={{ color: '#CC0000' }} />
                +91 94432 82312
              </a>
              <a href="tel:+919443692711" className="contact-info-link">
                <Icon name="PhoneIcon" size={16} variant="solid" style={{ color: '#CC0000' }} />
                +91 94436 92711
              </a>
            </div>
          </ScrollReveal>
        </div>

        <JsonLd
          data={productSchema({
            name: 'TOPBAS SIRIUS ESE Lightning Arrester',
            description:
              'Non-electronic Early Streamer Emission (ESE) lightning arrester, imported from Turkey, with a protection radius of up to 107 m (5 m mast, Level IV).',
            image: '/assets/images/sirius-ese-lightning-arrester.webp',
            brand: 'TOPBAS',
            specs,
          })}
        />

        {/* UMBRAECO ESE Lightning Arrester Product */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Product image */}
          <ScrollReveal delay={1} className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-xl aspect-square bg-muted flex items-center justify-center">
              <AppImage
                src="/assets/images/lyra-ese-lightning-arrester.webp"
                alt="UMBRAECO ESE lightning arrester device, non-electronic early streamer emission type for lightning protection"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-4" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <span
                  className="inline-block px-3 py-1 rounded-sm text-xs font-800 uppercase tracking-widest mb-2"
                  style={{ backgroundColor: '#CC0000', color: '#FFFFFF' }}>
                  UMBRAECO
                </span>
                <p className="text-white font-700 text-base">ESE Lightning Arrester</p>
                <p className="text-white/70 text-xs mt-1">Non-Electronic ESE</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Features table */}
          <ScrollReveal delay={2} className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-muted/40">
                <h3 className="text-base font-800 text-foreground">Features</h3>
                <p className="text-xs text-muted-foreground mt-0.5">UMBRAECO ESE Lightning Arrester</p>
              </div>
              <div className="px-6 py-2">
                {umbraEcoFeatures?.map((feature) =>
                  <div key={feature?.label} className="spec-row">
                    <span className="text-xs font-700 uppercase tracking-wider text-muted-foreground w-2/5 flex-shrink-0">
                      {feature?.label}
                    </span>
                    <span className="text-sm font-600 text-foreground text-right">
                      {feature?.value}
                    </span>
                  </div>
                )}
              </div>
              <div className="px-6 py-4 border-t border-border bg-muted/20">
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  Designed and tested as per NF C 17-102 (2011) Standard. Consult a qualified engineer for project-specific design decisions.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Quote
                <Icon name="ArrowRightIcon" size={16} variant="outline" />
              </Link>
              <a href="tel:+919443282312" className="contact-info-link">
                <Icon name="PhoneIcon" size={16} variant="solid" style={{ color: '#CC0000' }} />
                +91 94432 82312
              </a>
              <a href="tel:+919443692711" className="contact-info-link">
                <Icon name="PhoneIcon" size={16} variant="solid" style={{ color: '#CC0000' }} />
                +91 94436 92711
              </a>
            </div>
          </ScrollReveal>
        </div>

        <JsonLd
          data={productSchema({
            name: 'UMBRAECO ESE Lightning Arrester',
            description:
              'Non-electronic Early Streamer Emission (ESE) lightning arrester, CE certified, with a protection radius of up to 51 m (Level IV) and no battery or external power source required.',
            image: '/assets/images/lyra-ese-lightning-arrester.webp',
            brand: 'TOPBAS',
            specs: umbraEcoFeatures,
          })}
        />

        {/* Surge Protection Devices (SPD) Subheading */}
        <ScrollReveal className="mt-16 mb-10">
          <h3 className="text-xl font-800 text-foreground border-b border-border pb-3">
            Surge Protection Devices (SPD)
          </h3>
        </ScrollReveal>

        {/* SPD Product */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start mb-16">
          {/* Product image */}
          <ScrollReveal delay={1} className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-xl aspect-square bg-muted flex items-center justify-center">
              <AppImage
                src="/assets/images/type-1-2-spd.webp"
                alt="Surge Protection Device (SPD) Type 2 single phase unit for electrical surge protection"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-4" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <span
                  className="inline-block px-3 py-1 rounded-sm text-xs font-800 uppercase tracking-widest mb-2"
                  style={{ backgroundColor: '#CC0000', color: '#FFFFFF' }}>
                  SPD
                </span>
                <p className="text-white font-700 text-base">Surge Protection Device</p>
                <p className="text-white/70 text-xs mt-1">Type 1 + 2 SPD, Three Phase</p>
              </div>
            </div>
          </ScrollReveal>

          {/* SPD Specs table */}
          <ScrollReveal delay={2} className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-muted/40">
                <h3 className="text-base font-800 text-foreground">Technical Specifications</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Surge Protection Device (SPD)</p>
              </div>
              <div className="px-6 py-2">
                {spdSpecs?.map((spec) =>
                  <div key={spec?.label} className="spec-row">
                    <span className="text-xs font-700 uppercase tracking-wider text-muted-foreground w-2/5 flex-shrink-0">
                      {spec?.label}
                    </span>
                    <span className="text-sm font-600 text-foreground text-right">
                      {spec?.value}
                    </span>
                  </div>
                )}
              </div>
              <div className="px-6 py-4 border-t border-border bg-muted/20">
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  Consult a qualified engineer for project-specific design decisions.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Quote
                <Icon name="ArrowRightIcon" size={16} variant="outline" />
              </Link>
              <a href="tel:+919443282312" className="contact-info-link">
                <Icon name="PhoneIcon" size={16} variant="solid" style={{ color: '#CC0000' }} />
                +91 94432 82312
              </a>
              <a href="tel:+919443692711" className="contact-info-link">
                <Icon name="PhoneIcon" size={16} variant="solid" style={{ color: '#CC0000' }} />
                +91 94436 92711
              </a>
            </div>
          </ScrollReveal>
        </div>

        <JsonLd
          data={productSchema({
            name: 'TOPBAS Surge Protection Device (SPD)',
            description:
              'Type 1 + 2 (Class B + C) three-phase surge protection device for electrical panels and sensitive equipment.',
            image: '/assets/images/type-1-2-spd.webp',
            brand: 'TOPBAS',
            specs: spdSpecs,
          })}
        />

        {/* Earth Rods Subheading */}
        <ScrollReveal className="mt-4 mb-10">
          <h3 className="text-xl font-800 text-foreground border-b border-border pb-3">
            Earth Rods
          </h3>
        </ScrollReveal>

        {/* Copper Bonded Earth Rod */}
        <ProductSpecCard
          className="mb-16"
          imageSrc="/assets/images/copper-earth-rod.webp"
          imageAlt="Copper bonded earth rod for earthing and grounding installations"
          badge="Copper Bonded Earth Rod"
          productLine="Copper Bonded Earth Rod"
          tagline="Earthing Electrode"
          specsSubtitle="Copper Bonded Earth Rod"
          specs={[
            { label: 'Minimum Order Quantity', value: '1 Piece' },
            { label: 'Usage/Application', value: 'Earthing' },
            { label: 'Length', value: '1 meter, 2 meter and 3 meter' },
            { label: 'Diameter', value: '17.2 mm' },
          ]}
        />

        {/* GI Earth Rod */}
        <ProductSpecCard
          className="mb-16"
          imageSrc="/assets/images/gi-earth-rod.webp"
          imageAlt="GI earth rod, galvanised iron earthing rod for grounding installations"
          badge="GI Earth Rod"
          productLine="GI Earth Rod"
          tagline="Earthing Electrode"
          specsSubtitle="GI Earth Rod"
          specs={[
            { label: 'Length', value: '1 m, 2 m, 3 m' },
            { label: 'Diameter', value: '48 mm' },
            { label: 'Wall Thickness', value: '3 mm' },
            { label: 'Material', value: 'Class B GI Pipe' },
          ]}
        />

        {/* Earthing Compound Subheading */}
        <ScrollReveal className="mt-4 mb-10">
          <h3 className="text-xl font-800 text-foreground border-b border-border pb-3">
            Earthing Compound
          </h3>
        </ScrollReveal>

        {/* CARBOMAXX Earthing Compound */}
        <ProductSpecCard
          className="mb-16"
          imageSrc="/assets/images/carbomaxx-earthing-compound.webp"
          imageAlt="CARBOMAXX earthing compound bag, backfill compound for earthing pits"
          badge="CARBOMAXX"
          productLine="Earthing Compound"
          tagline="TOPBAS Earthing Compound"
          specsSubtitle="CARBOMAXX Earthing Compound"
          schemaBrand="TOPBAS"
          specs={[
            { label: 'Physical State', value: 'Powder' },
            { label: 'Brand', value: 'TOPBAS' },
            { label: 'Packaging Type', value: 'Bag' },
            { label: 'Packaging Size', value: '10 kgs, 25 kgs' },
            { label: 'Country of Origin', value: 'Made in India' },
          ]}
        />

        {/* Conventional Lightning Arresters Subheading */}
        <ScrollReveal className="mt-4 mb-10">
          <h3 className="text-xl font-800 text-foreground border-b border-border pb-3">
            Conventional Lightning Arresters
          </h3>
        </ScrollReveal>

        {/* Copper Bonded Conventional Lightning Arrester */}
        <ProductSpecCard
          className="mb-16"
          imageSrc="/assets/images/copper-spike-lightning-arrester.webp"
          imageAlt="Copper bonded conventional lightning arrester with mounting base"
          badge="Copper Bonded"
          productLine="Copper Bonded Conventional Lightning Arrester"
          tagline="External Lightning Protection"
          specsSubtitle="Copper Bonded Conventional Lightning Arrester"
          specs={[
            { label: 'Lightning Protection Material', value: 'Copper' },
            { label: 'Current Rating', value: '100 kA' },
            { label: 'Phase', value: 'Single Phase' },
            { label: 'No. of Poles', value: 'External' },
            { label: 'Type', value: 'External' },
            { label: 'Highest Voltage Protection', value: 'External' },
            { label: 'Protection Radius', value: '5 meters' },
            { label: 'Country of Origin', value: 'Made in India' },
          ]}
        />

        {/* Earth Pit Chambers Subheading */}
        <ScrollReveal className="mt-4 mb-10">
          <h3 className="text-xl font-800 text-foreground border-b border-border pb-3">
            Earth Pit Chambers
          </h3>
        </ScrollReveal>

        {/* Earth Pit Cover */}
        <ProductSpecCard
          imageSrc="/assets/images/earth-pit-cover.webp"
          imageAlt="Earth pit cover chamber, polyplastic earthing pit cover with lid"
          badge="Earth Pit Cover"
          productLine="Earth Pit Chamber Cover"
          tagline="Earthing Pit Cover"
          specsSubtitle="Earth Pit Cover"
          specs={[
            { label: 'Size', value: '6 Inch' },
            { label: 'Material', value: 'Polyplastic' },
            { label: 'Finishing', value: 'Polished' },
            { label: 'Color', value: 'Black' },
            { label: 'Equipment Type', value: 'Earthing Pit Cover' },
            { label: 'Country of Origin', value: 'Made in India' },
            { label: 'Dimension', value: 'Top (Dia) 155 mm x Bottom (Dia) 210 mm x Height 240 mm' },
          ]}
        />

        {/* FRP Earth Pit Cover */}
        <ProductSpecCard
          className="mt-16"
          imageSrc="/assets/images/frp-earth-pit-cover.webp"
          imageAlt="FRP earth pit cover chamber, corrosion resistant earthing pit cover with green lid"
          badge="FRP Earth Pit Cover"
          productLine="Earth Pit Chamber Cover"
          tagline="Earthing Pit Cover"
          specsSubtitle="FRP Earth Pit Cover"
          specs={[
            { label: 'Size', value: '10 Inch' },
            { label: 'Material', value: 'FRP' },
            { label: 'Color', value: 'Black' },
            { label: 'Dimensions', value: 'Top (Dia) 254 mm x Bottom (Dia) 210 mm x Height 240 mm' },
            { label: 'Features', value: 'Corrosion Resistant' },
            { label: 'Equipment Type', value: 'Earthing Pit Cover' },
            { label: 'Country of Origin', value: 'Made in India' },
          ]}
        />

      </div>
    </section>);

}