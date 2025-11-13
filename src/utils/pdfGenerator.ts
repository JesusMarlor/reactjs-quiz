import { jsPDF } from 'jspdf';
import { Answer } from '../components/Quiz';

export function generatePDF(candidateName: string, answers: Answer[], score: number) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxLineWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  const addNewPageIfNeeded = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  const splitText = (text: string, maxWidth: number, fontSize: number) => {
    doc.setFontSize(fontSize);
    return doc.splitTextToSize(text, maxWidth);
  };

  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageWidth, 40, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text('Resultado del Quiz de React', pageWidth / 2, 25, { align: 'center' });

  yPosition = 60;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(16);
  doc.text(`Candidato: ${candidateName}`, margin, yPosition);

  yPosition += 10;
  doc.setFontSize(12);
  const date = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  doc.text(`Fecha: ${date}`, margin, yPosition);

  yPosition += 15;
  doc.setFillColor(240, 240, 240);
  doc.rect(margin, yPosition, maxLineWidth, 25, 'F');

  const correctAnswers = answers.filter((a) => a.isCorrect).length;
  const totalQuestions = answers.length;

  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.text(`Calificación: ${score}%`, margin + 5, yPosition + 10);

  doc.setFont(undefined, 'normal');
  doc.setFontSize(12);
  doc.text(
    `Respuestas correctas: ${correctAnswers} de ${totalQuestions}`,
    margin + 5,
    yPosition + 20
  );

  yPosition += 35;

  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.text('Detalle de Respuestas', margin, yPosition);
  doc.setFont(undefined, 'normal');

  yPosition += 10;

  answers.forEach((answer, index) => {
    const questionHeight = 40;
    addNewPageIfNeeded(questionHeight);

    if (answer.isCorrect) {
      doc.setFillColor(220, 252, 231);
      doc.setDrawColor(34, 197, 94);
    } else {
      doc.setFillColor(254, 226, 226);
      doc.setDrawColor(239, 68, 68);
    }

    const boxHeight = 35;
    doc.rect(margin, yPosition, maxLineWidth, boxHeight, 'FD');

    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(0, 0, 0);

    const statusText = answer.isCorrect ? '✓ CORRECTA' : '✗ INCORRECTA';
    const statusColor = answer.isCorrect ? [34, 197, 94] : [239, 68, 68];
    doc.setTextColor(statusColor[0], statusColor[1], statusColor[2]);
    doc.text(statusText, margin + 5, yPosition + 7);

    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);
    const typeText = answer.type === 'multiple' ? 'Opción Múltiple' :
                     answer.type === 'open' ? 'Abierta' : 'V/F';
    doc.text(typeText, pageWidth - margin - 30, yPosition + 7);

    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    const questionLines = splitText(`${index + 1}. ${answer.question}`, maxLineWidth - 10, 10);
    doc.text(questionLines, margin + 5, yPosition + 14);

    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);
    const userAnswerText = `Tu respuesta: ${answer.userAnswer || '(Sin respuesta)'}`;
    doc.text(userAnswerText, margin + 5, yPosition + 22);

    if (!answer.isCorrect) {
      doc.setTextColor(34, 197, 94);
      const correctAnswerText = `Respuesta correcta: ${answer.correctAnswer}`;
      doc.text(correctAnswerText, margin + 5, yPosition + 28);
      doc.setTextColor(0, 0, 0);
    }

    yPosition += boxHeight + 5;

    if (yPosition > pageHeight - 50 && index < answers.length - 1) {
      doc.addPage();
      yPosition = margin;
    }
  });

  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.text(
      `Página ${i} de ${totalPages}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  const fileName = `Quiz_React_${candidateName.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
  doc.save(fileName);
}
