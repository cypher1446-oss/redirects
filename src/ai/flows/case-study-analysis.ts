'use server';

/**
 * @fileOverview Analyzes market research case studies to extract key data points.
 *
 * - analyzeCaseStudy - A function that handles the case study analysis process.
 * - CaseStudyAnalysisInput - The input type for the analyzeCaseStudy function.
 * - CaseStudyAnalysisOutput - The return type for the analyzeCaseStudy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CaseStudyAnalysisInputSchema = z.object({
  caseStudyText: z
    .string()
    .describe('The text content of the market research case study.'),
  query: z.string().describe('Specific question or data point to extract.'),
});
export type CaseStudyAnalysisInput = z.infer<typeof CaseStudyAnalysisInputSchema>;

const CaseStudyAnalysisOutputSchema = z.object({
  relevantDataPoints: z
    .string()
    .describe(
      'Extracted data points from the case study relevant to the query.'
    ),
  summary: z.string().describe('A summary of the case study in relation to the query.'),
});
export type CaseStudyAnalysisOutput = z.infer<typeof CaseStudyAnalysisOutputSchema>;

export async function analyzeCaseStudy(
  input: CaseStudyAnalysisInput
): Promise<CaseStudyAnalysisOutput> {
  return caseStudyAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'caseStudyAnalysisPrompt',
  input: {schema: CaseStudyAnalysisInputSchema},
  output: {schema: CaseStudyAnalysisOutputSchema},
  prompt: `You are an expert market research analyst.

  Your goal is to analyze the provided market research case study and extract key data points relevant to the user's query.
  Provide a concise summary of the case study in relation to the query and list the specific data points you extracted.

  Case Study Text: {{{caseStudyText}}}
  Query: {{{query}}}

  Output the relevant data points and a summary. Make sure to include units of measure if available.
  `,
});

const caseStudyAnalysisFlow = ai.defineFlow(
  {
    name: 'caseStudyAnalysisFlow',
    inputSchema: CaseStudyAnalysisInputSchema,
    outputSchema: CaseStudyAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
