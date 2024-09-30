import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  tiers: [
    {
      title: 'Gold Sponsors',
      monthlyDollars: 10,
      preset: tierPresets.xl,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 5,
      preset: tierPresets.large,
    },
    {
      title: 'Sponsors',
      preset: tierPresets.medium,
    },
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.small,
    },
  ],
  renders: [
    {
      name: 'sponsors',
      width: 800,
      formats: ['svg'],
    },
  ],
})
