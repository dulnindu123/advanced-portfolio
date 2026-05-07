import PyPDF2

def update_pdf_metadata(input_path, output_path, new_title):
    with open(input_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        writer = PyPDF2.PdfWriter()

        for page in reader.pages:
            writer.add_page(page)

        # Update metadata
        metadata = reader.metadata
        new_metadata = {k: v for k, v in metadata.items()}
        new_metadata['/Title'] = new_title
        
        writer.add_metadata(new_metadata)

        with open(output_path, 'wb') as output_f:
            writer.write(output_f)

if __name__ == "__main__":
    update_pdf_metadata(
        "public/cv.pdf", 
        "public/cv_fixed.pdf", 
        "Dulnindu Saranga - Software Engineer CV"
    )
    print("PDF Metadata updated successfully.")
