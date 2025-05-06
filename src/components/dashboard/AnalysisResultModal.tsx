
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AnalysisResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  analysis: {
    summary?: string;
    interestLevel?: "Alto" | "Moderado" | "Baixo";
    suggestions?: string[];
    responses?: {
      humorous?: string;
      sarcastic?: string;
      direct?: string;
    };
  };
}

const AnalysisResultModal: React.FC<AnalysisResultModalProps> = ({
  isOpen,
  onClose,
  title,
  analysis,
}) => {
  const getInterestLevelColor = () => {
    switch (analysis.interestLevel) {
      case "Alto":
        return "text-green-500";
      case "Moderado":
        return "text-yellow-500";
      case "Baixo":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-xl">{title}</DialogTitle>
          <DialogDescription>
            Análise criada pela FodaCerta™ para ajudar seu relacionamento
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {analysis.summary && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Resumo</h3>
              <p className="text-sm">{analysis.summary}</p>
            </div>
          )}

          {analysis.interestLevel && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Nível de interesse
              </h3>
              <p className={`text-sm font-semibold ${getInterestLevelColor()}`}>
                {analysis.interestLevel}
              </p>
            </div>
          )}

          {analysis.suggestions && analysis.suggestions.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Sugestões
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                {analysis.suggestions.map((suggestion, index) => (
                  <li key={index} className="text-sm">
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {analysis.responses && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Respostas sugeridas
              </h3>
              <div className="space-y-2">
                {analysis.responses.humorous && (
                  <div className="bg-brand-soft-purple p-3 rounded-lg text-sm">
                    <span className="block text-xs font-semibold text-brand-purple-dark mb-1">
                      Humorística:
                    </span>
                    {analysis.responses.humorous}
                  </div>
                )}
                {analysis.responses.sarcastic && (
                  <div className="bg-brand-soft-gray p-3 rounded-lg text-sm">
                    <span className="block text-xs font-semibold text-gray-600 mb-1">
                      Sarcástica:
                    </span>
                    {analysis.responses.sarcastic}
                  </div>
                )}
                {analysis.responses.direct && (
                  <div className="bg-gray-100 p-3 rounded-lg text-sm">
                    <span className="block text-xs font-semibold text-gray-600 mb-1">
                      Direta:
                    </span>
                    {analysis.responses.direct}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnalysisResultModal;
