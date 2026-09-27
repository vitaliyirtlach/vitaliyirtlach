declare module "html2pdf.js" {
  type Html2PdfOptions = {
    margin?: number | number[];
    filename?: string;
    image?: { type?: string; quality?: number };
    html2canvas?: Record<string, unknown>;
    jsPDF?: Record<string, unknown>;
    pagebreak?: { mode?: string | string[] };
    /** Adds a PDF link annotation for every <a> in the source. */
    enableLinks?: boolean;
  };

  type Html2Pdf = {
    set(options: Html2PdfOptions): Html2Pdf;
    from(element: HTMLElement): Html2Pdf;
    save(): Promise<void>;
  };

  export default function html2pdf(): Html2Pdf;
}
