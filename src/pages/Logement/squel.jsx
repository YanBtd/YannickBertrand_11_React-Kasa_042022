{
    logement ? (
        <LogementContainer>
            <Carrousel images={logement?.pictures} />

            <LogementWrapper>
                <LogementInfos>
                    <LogementTitre>{logement?.title}</LogementTitre>
                    <LogementLocation>{logement?.location}</LogementLocation>
                    <LogementTags>{tagsLogement}</LogementTags>
                </LogementInfos>
                <HostWrapper>
                    <HostInfos>
                        <HostName>{logement?.host.name}</HostName>
                        <HostPhoto
                            src={logement?.host.picture}
                            alt="Propriétaire"
                        />
                    </HostInfos>
                    <HostNote>{noteLogement}</HostNote>
                </HostWrapper>
            </LogementWrapper>
            <DescAndEquipts>
                <Dropdown
                    titre="Description"
                    description={logement?.description}
                />
                <Dropdown
                    titre="Équipements"
                    description={equipementsLogement}
                />
            </DescAndEquipts>
        </LogementContainer>
    ) : (
        <Navigate replace to="*" />
    );
}
