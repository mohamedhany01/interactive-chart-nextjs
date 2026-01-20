'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Certification } from '@/types/certification';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

interface CertificationDetailModalProps {
    certification: Certification | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function CertificationDetailModal({
    certification,
    open,
    onOpenChange,
}: CertificationDetailModalProps) {
    if (!certification) return null;

    const certTypeColors = {
        blue: 'bg-blue-500',
        red: 'bg-red-500',
        infoSec: 'bg-green-500',
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <DialogTitle className="text-2xl">{certification.title}</DialogTitle>
                            <DialogDescription className="text-base mt-1">
                                {certification.abbreviation} • {certification.provider?.name}
                            </DialogDescription>
                        </div>
                        <Badge className={certTypeColors[certification.cert_type]}>
                            {certification.cert_type === 'blue' ? 'Blue Team' :
                                certification.cert_type === 'red' ? 'Red Team' : 'InfoSec'}
                        </Badge>
                    </div>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                    {/* Description */}
                    <div>
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-sm text-muted-foreground">{certification.description}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Market Presence</p>
                            <p className="text-lg font-semibold">{(certification.market_presence * 100).toFixed(1)}%</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Satisfaction</p>
                            <p className="text-lg font-semibold">{certification.satisfaction.toFixed(1)}/5.0</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Quality</p>
                            <p className="text-lg font-semibold">{certification.quality.toFixed(1)}/5.0</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Total Votes</p>
                            <p className="text-lg font-semibold">{certification.total_votes.toLocaleString()}</p>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold mb-2">Details</h3>
                            <dl className="space-y-2 text-sm">
                                <div>
                                    <dt className="text-muted-foreground">Skill Level</dt>
                                    <dd className="font-medium">{certification.skill_level}</dd>
                                </div>
                                <div>
                                    <dt className="text-muted-foreground">Cost</dt>
                                    <dd className="font-medium">{certification.cost}</dd>
                                </div>
                                <div>
                                    <dt className="text-muted-foreground">Valid For</dt>
                                    <dd className="font-medium">{certification.valid_for || 'N/A'}</dd>
                                </div>
                                <div>
                                    <dt className="text-muted-foreground">Training Included</dt>
                                    <dd className="font-medium">{certification.training_included ? 'Yes' : 'No'}</dd>
                                </div>
                            </dl>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Exam Details</h3>
                            <dl className="space-y-2 text-sm">
                                <div>
                                    <dt className="text-muted-foreground">Format</dt>
                                    <dd className="font-medium">{certification.exam_details_data.format}</dd>
                                </div>
                                <div>
                                    <dt className="text-muted-foreground">Duration</dt>
                                    <dd className="font-medium">{certification.exam_details_data.duration || 'N/A'}</dd>
                                </div>
                                <div>
                                    <dt className="text-muted-foreground">Report Required</dt>
                                    <dd className="font-medium">{certification.exam_details_data.report_required ? 'Yes' : 'No'}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    {/* Requirements */}
                    <div>
                        <h3 className="font-semibold mb-2">Requirements</h3>
                        <dl className="space-y-2 text-sm">
                            <div>
                                <dt className="text-muted-foreground">Knowledge</dt>
                                <dd>{certification.requirements_data.knowledge}</dd>
                            </div>
                            <div>
                                <dt className="text-muted-foreground">Work Experience</dt>
                                <dd>{certification.requirements_data.work_experience}</dd>
                            </div>
                            <div>
                                <dt className="text-muted-foreground">Prior Courses/Certifications</dt>
                                <dd>{certification.requirements_data.prior_courses_and_certifications}</dd>
                            </div>
                        </dl>
                    </div>

                    {/* Job Roles */}
                    {certification.job_roles_titles.length > 0 && (
                        <div>
                            <h3 className="font-semibold mb-2">Relevant Job Roles</h3>
                            <div className="flex flex-wrap gap-2">
                                {certification.job_roles_titles.map((role, index) => (
                                    <Badge key={index} variant="secondary">{role}</Badge>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Domains */}
                    {certification.domains_covered_titles.length > 0 && (
                        <div>
                            <h3 className="font-semibold mb-2">Domains Covered</h3>
                            <div className="flex flex-wrap gap-2">
                                {certification.domains_covered_titles.map((domain, index) => (
                                    <Badge key={index} variant="outline">{domain}</Badge>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Link */}
                    {certification.url && (
                        <div>
                            <a
                                href={certification.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                            >
                                Visit Official Website
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
