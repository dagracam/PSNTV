import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { programs } from "@/data/programs";
import ProgramCard from "./ProgramCard";
import { Search } from "lucide-react";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPrograms, setFilteredPrograms] = useState(programs);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPrograms(programs);
    } else {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const results = programs.filter(
        (program) =>
          program.title.toLowerCase().includes(lowercasedSearchTerm) ||
          program.description.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredPrograms(results);
    }
  }, [searchTerm]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-dyad-bg/95 backdrop-blur-sm border-dyad-border p-6 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2 mb-6">
          <Search className="h-5 w-5 text-dyad-text/70" />
          <Input
            type="text"
            placeholder="Cerca programmi..."
            className="flex-grow bg-transparent border-dyad-border text-dyad-text placeholder:text-dyad-text/50 focus-visible:ring-dyad-link-blue focus:border-dyad-link-blue"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-2">
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))
          ) : (
            <p className="col-span-full text-center text-dyad-text/70">Nessun programma trovato.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;